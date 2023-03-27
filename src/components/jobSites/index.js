import React, { useState } from "react";
import './index.css';

import linkedInJobs from '../../data/linked_jobs.json';
import indeedJobs from '../../data/indeed_jobs.json';
import wellfoundJobs from '../../data/wellfound_jobs.json';

const jobSites = [linkedInJobs, indeedJobs, wellfoundJobs];


// most likely going to use python to convert the excel .csv file to json data and then parse through that data to create a table

export const JobSiteTable = (props) => {
    const createTable = () => {
        const sortedJobs = jobSites[props.site].sort((a, b) => new Date(b.Date) - new Date(a.Date)); // sort the dates
        return sortedJobs.map((job, index) => {
            let rowStyle = {}; // style entire row
            let easyStyle = {}; // styling for easy apply for linkedin // Will need to pass props to use it for indeed // apply_now = indeed
            let remoteStyle = {}; // style for remote work
            let accountStyle = {}; // style if I am required to create a new account on a different site to applye
            let statusStyle = {}; // style if I am required to fill in all information readily avaialbe on linked in for a resume app

            switch (job.Remote) {
                case "Yes":
                    remoteStyle = { background: "#79d479d4" }
                    break;
                case "No":
                    remoteStyle = { background: "#f6000075" }
                    break;
                case "Hybrid":
                    remoteStyle = { background: "#e9e918d1" }
                    break;
                default:
                    break;
            }
            // easy_apply = linkedin // apply_now = indeed //
            (job.Apply === "Yes") ? easyStyle = { background: "#79d479d4" } : easyStyle = { background: "#f6000075" };
            // require account creation on separate site
            (job.Account === "No") ? accountStyle = { background: "#79d479d4" } : accountStyle = { background: "#f6000075" };


            // either applied or rejected // will need to add INTERVIEWING if it occurs
            if (job.Status === "APPLIED") {
                statusStyle = { background: "#79d479d4" }
            } else if (job.Status === "REJECTED") {
                statusStyle = { background: "#f6000075" }
                rowStyle = { textDecoration: "line-through" }
            }

            return (
                <tr key={index} style={rowStyle}>
                    <td>{job.Job_Title}</td>
                    <td>{job.Date}</td>
                    <td>{job.Company}</td>
                    <td style={easyStyle}>{job.Apply}</td> {/** easy_apply = linkedin // apply_now = indeed */}
                    <td style={remoteStyle}>{job.Remote}</td>
                    <td style={accountStyle}>{job.Account}</td>
                    <td style={accountStyle}>{job.Refill}</td>
                    <td style={statusStyle}>{job.Status}</td>
                    <td>{job.Reason}</td>
                </tr>
            );
        });
    };


    return (
        <section id="linked-section">
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Date</th>
                        <th>Company</th>
                        <th>{props.apply_onsite}</th> {/**Easy Apply = linked // Apply_Now = indeed */}
                        <th>Remote</th>
                        <th>Account</th>
                        <th>Refill</th>
                        <th>Status</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {createTable()}
                </tbody>
            </table>
        </section>
    );
};