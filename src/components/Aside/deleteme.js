import React, { useState, useEffect } from "react";
import { Tabs } from "../Tabs";
import { SanJacinto, Perris, MorenoValley, Hemet } from "../Tabs/Alltabs";
import { ALink } from "../Link";
// import { Facebook } from "../components/Social";
import { Hamburger } from "../Hamburger";
import "./index.css";

export const Nav = () => {

    // controls settings for specific store details 
    const [activeTab, setActiveTab] = useState();
    // the next three states are used for navigation bar with the third state representing the store list
    const [isNavOpen, setIsNavOpen] = useState();
    const [isClicked, setIsClicked] = useState();
    const [isStoreTabClicked, setIsStoreTabClicked] = useState();

    // set active states in handler on click event
    const handleSanJacinto = () => { setActiveTab("sanJacinto") }
    const handlePerris = () => { setActiveTab("perris") }
    const handleMorenoValley = () => { setActiveTab("morenoValley") }
    const handleHemet = () => { setActiveTab("hemet") }
    // chose correct return on chosen tab value dependent upon which is activeTab

    // this function is responsible for displaying the information for whichever store the user picks
    const chosenTab = (value) => {
        switch (value) {
            case "sanJacinto":
                return <SanJacinto />
            case "hemet":
                return <Hemet />
            case "perris":
                return <Perris />
            case "morenoValley":
                return <MorenoValley />
        }
    }

    // toggleNav
    const handleClick = () => {
        setIsNavOpen(!isNavOpen)
        setIsClicked(!isClicked)
    }

    // onClick() function that will control when to display the list of stores
    const toggleStores = () => {
        setIsStoreTabClicked(!isStoreTabClicked)
    }

    const pageLinks = () => {

        return (
            <div className={isNavOpen ? "wrapper nav-container" : "wrapper nav-container-open"}>
                {/* <a href="#contact" className={isNavOpen ? "nav-closed" : ""}>Contact</a> */}
                {/* Stores Link  */}
                <ALink onClick={toggleStores} className={isNavOpen ? "main-nav nav-closed " : "main-nav nav-open" + (isStoreTabClicked ? " store-visible" : "")}>
                    Stores
                </ALink>
                <ALink className={isNavOpen ? "main-nav nav-closed" : "main-nav nav-open"}>
                    FAQ
                </ALink>

                <Tabs
                    // this will close the nav bar and any store information that isopen.
                    displayClasses={isStoreTabClicked && !isClicked ? "stores-visible" : "stores-hidden"}
                    activeSanJacinto={activeTab === "sanJacinto" ? "store-menu-list active" : "store-menu-list"}
                    activePerris={activeTab === "perris" ? "store-menu-list active" : "store-menu-list"}
                    activeMorenoValley={activeTab === "morenoValley" ? "store-menu-list active" : "store-menu-list"}
                    activeHemet={activeTab === "hemet" ? "store-menu-list active" : "store-menu-list"}
                    clickSanJacinto={handleSanJacinto}
                    clickPerris={handlePerris}
                    clickMorenoValley={handleMorenoValley}
                    clickHemet={handleHemet}
                />

                {/* */}
                <Hamburger
                    hamClass={isClicked ? "change" : "container"}
                    hamClick={handleClick}
                />
            </div>
        )
    }

    return (
        <>
            {pageLinks()}
            <nav id="landing-nav">
            </nav>
            {/* This is where the tab shows its data  */}
            <div className={isStoreTabClicked && !isClicked ? "outlet outlet-visible" : "outlet outlet-hidden"}>
                {chosenTab(activeTab)}
            </div>
        </>
    )
}