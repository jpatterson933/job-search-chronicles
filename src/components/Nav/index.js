import React, { useState } from "react";
import { Button } from "../Button";
import './index.css';

import linkedInJobs from '../../data/linked_jobs.json';

// console.log(linkedInJobs)

// most likely going to use python to convert the excel .csv file to json data and then parse through that data to create a table

export const LinkedIn = () => {
    const createTable = () => {
        const sortedJobs = linkedInJobs.sort((a, b) => new Date(b.Date) - new Date(a.Date));
        return sortedJobs.map((job, index) => {
            let rowStyle = {}; // style entire row
            let easyStyle = {}; // styling for easy applyu
            let remoteStyle = {}; // style for remote work
            let accountStyle = {}; // style if I am required to create a new account on a different site to applye
            let statusStyle = {}; // style if I am required to fill in all information readily avaialbe on linked in for a resume app


            if (job.Status === "APPLIED") {
                statusStyle = { background: "#79d479d4" }
            } else if (job.Status === "REJECTED") {
                statusStyle = { background: "#f6000075" }
                rowStyle = { textDecoration: "line-through"}
            }

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
            }

            (job.Easy_Apply === "Yes") ? easyStyle = { background: "#79d479d4" } : easyStyle = { background: "#f6000075" };
            (job.Account === "No") ? accountStyle = { background: "#79d479d4" } : accountStyle = { background: "#f6000075" };


            return (
                <tr key={index} style={rowStyle}>
                    <td>{job.Job_Title}</td>
                    <td>{job.Date}</td>
                    <td>{job.Company}</td>
                    <td style={easyStyle}>{job.Easy_Apply}</td>
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
                        <th>Easy Apply</th>
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



export const Nav = () => {
    // here we set index to 0 which is linked in
    const [activeTab, setActiveTab] = useState(0);
    // on clicke that will set the index to the active tab and update the dom
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <nav className="tab-nav">
                <Button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'nav-link active' : 'nav-link'}>LinkedIn</Button>
                <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''} disabled>Indeed</button>
                <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''} disabled>Wellfound</button>
            </nav>
            {/* {activeTab === 0 && <section>This is where we will render the linked in tab information</section>} */}
            {activeTab === 0 && <LinkedIn />}
            {/* {activeTab === 1 && <p>Content of Tab 2</p>} */}
            {/* {activeTab === 2 && <p>Content of Tab 3</p>} */}
        </>
    );
}

