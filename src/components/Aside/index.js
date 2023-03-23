import React, { useState } from "react";
import { AsideLink } from "../AsideLinks";
import './index.css';
export const AsideBar = () => {
    const [show, setShow] = useState();
    const [isClicked, setIsClicked] = useState();

    const handleClick = () => {
        setShow(!show)
        setIsClicked(!isClicked)
    }
    // i can create a function or a object that holds the styles, and then a function that alters the styles 
    // on the css property when isClicked is true
    const asideLinkStyles = {
        textDecoration: "none",
        color: "darkblue",
        margin: "2px",
        fontSize: "24px",
        padding: "8px",
        width: "4em",
        textAlign: "center",
        border: "3px solid transparent",
        borderRadius: "12px",
        background: "linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, rgb(6 175 255)) border-box"
    }
// THEN INSIDE OF CLASSNAME, ORRR INSIDE OF STYLE WE CAN MAKE ADJUSTMENTS OR INSIDE OF THE FUNCTIONS ABOVE
    return (
        <aside className="aside-bar">
            <button className={isClicked ? "aside-button show-aside-button" : "aside-button hide-aside-button"} onClick={handleClick}></button>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink style={asideLinkStyles} className={isClicked ? "aside-links-hidden" : "aside-links-visible"} rel="external" href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
        </aside>
    )
}