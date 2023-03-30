import React, { useState, useEffect } from "react";
import './index.css';

import linkedInJobs from '../../data/linked_jobs.json';
import indeedJobs from '../../data/indeed_jobs.json';
import wellfoundJobs from '../../data/wellfound_jobs.json';

const jobSites = [linkedInJobs, indeedJobs, wellfoundJobs];


// most likely going to use python to convert the excel .csv file to json data and then parse through that data to create a table

export const JobSiteTable = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isSmallScreen = windowWidth <= 768; // Change this value to the breakpoint you desire
    // const isMediumScreen = windowWidth <= 1168; // Change this value to the breakpoint you desire

    const createTable = () => {
        const sortedJobs = jobSites[props.site].sort((a, b) => new Date(b.Date) - new Date(a.Date)); // sort the dates

        return sortedJobs.map((job, index) => {
            let rowStyle = {}; // style entire row
            let easyStyle = {}; // styling for easy apply for linkedin // Will need to pass props to use it for indeed // apply_now = indeed
            let remoteStyle = {}; // style for remote work
            let accountStyle = {}; // style if I am required to create a new account on a different site to applye
            let statusStyle = {}; // style if I am required to fill in all information readily avaialbe on linked in for a resume app
            const colors = ["blue"]
            let colorIndex = 0;
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

            const styleObjects = [rowStyle, easyStyle, remoteStyle, accountStyle, statusStyle]
            switch (job.Status) {
                case "APPLIED":
                    statusStyle = { background: "#79d479d4" }
                    break;
                case "No Response":
                    styleObjects.forEach(style => { style.background = "grey"; style.opacity = "0.9" })
                    break;
                case "Application Viewed":
                    statusStyle = { background: "#e9e918d1" }
                    break;
                case "Resume Downloaded":
                    statusStyle = { background: "#009aff59" }
                    break;
                case "REJECTED":
                    styleObjects.forEach(style => {
                        style.background = "#f6000075";
                        style.textDecoration = "line-through";
                        style.opacity = "0.5";
                    })

                    statusStyle = { background: "#f6000075" }
                    break;
                default:
                    break;
            }


            const dateStyle = { color: colors[colorIndex] };
            colorIndex = (colorIndex + 1) % colors.length;


            return (
                <tr key={index} style={rowStyle}>
                    <td>{job.Job_Title}</td>
                    <td style={dateStyle}>{job.Date}</td>
                    <td>{job.Company}</td>
                    {!isSmallScreen && <td style={easyStyle}>{job.Apply}</td>}
                    {!isSmallScreen && <td style={remoteStyle}>{job.Remote}</td>}
                    {!isSmallScreen && <td style={accountStyle}>{job.Account}</td>}
                    {!isSmallScreen && <td style={accountStyle}>{job.Refill}</td>}
                    <td style={statusStyle}>{job.Status}</td>
                    {!isSmallScreen && <td>{job.Reason}</td>}
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
                        {!isSmallScreen && <th>{props.apply_onsite}</th>}
                        {!isSmallScreen && <th>Remote</th>}
                        {!isSmallScreen && <th>Account</th>}
                        {!isSmallScreen && <th>Refill</th>}
                        <th>Status</th>
                        {!isSmallScreen && <th>Reason</th>}
                    </tr>
                </thead>
                <tbody>{createTable()}</tbody>
            </table>
        </section>
    );
};


