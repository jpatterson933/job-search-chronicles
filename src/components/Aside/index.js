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

    return (
        <aside className="aside-bar">
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink className={isClicked ? "aside-links aside-links-hidden" : "aside-links aside-links-visible"} rel="external" href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
            <button className={isClicked ? "aside-button show-aside-button" : "aside-button hide-aside-button"} onClick={handleClick}></button>
        </aside>
    )
}