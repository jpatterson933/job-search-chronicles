import React, { useState } from "react";
import { Button } from "../Button";
import './index.css';
import { JobSiteTable } from "../jobSites";




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
                <Button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'nav-link active' : 'nav-link-disabled'}>LinkedIn</Button>
                <Button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'nav-link active' : 'nav-link-disabled'}>Indeed</Button>
                <Button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'nav-link active' : 'nav-link-disabled'}>Wellfound</Button>
            </nav>
            {/* {activeTab === 0 && <section>This is where we will render the linked in tab information</section>} */}
            {activeTab === 0 && <JobSiteTable site={0} apply_onsite="Easy Apply" />}
            {activeTab === 1 && <JobSiteTable site={1} apply_onsite="Apply Now" />}
            {activeTab === 2 && <JobSiteTable site={2} apply_onsite="wellfound" />}
            {/* {activeTab === 1 && <p>Content of Tab 2</p>} */}
            {/* {activeTab === 2 && <p>Content of Tab 3</p>} */}
        </>
    );
}

