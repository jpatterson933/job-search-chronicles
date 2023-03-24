import React, { useState } from "react";
import { Button } from "../Button";
import './index.css';

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
            {activeTab === 0 && <p>Content of Tab 1</p>}
            {/* {activeTab === 1 && <p>Content of Tab 2</p>} */}
            {/* {activeTab === 2 && <p>Content of Tab 3</p>} */}
        </>
    );
}