import React, { useState } from "react";
import { AsideLink } from "../AsideLinks";
import { Button } from "../Button";
import './index.css';

export const AsideBar = () => {
    const [show, setShow] = useState();
    const [isClicked, setIsClicked] = useState();
    // switch between fade-in and fade-out
    const handleClick = () => {
        setShow(!show)
        setIsClicked(!isClicked)
    }
    // fade-in
    const asideLinkStyles = {
        opacity: 100,
        visibility: "visible",
        transition: "opacity 1s ease-in-out, visibility 1s ease-in-out"
    }
    // fade-out
    const noAsideLinkVisible = {
        opacity: 0,
        visibility: "hidden",
        transition: "fade-out 1s ease-in-out forwards"
    }

    return (
        <aside className="aside-bar">
            <Button className={isClicked ? "aside-button show-aside-button" : "aside-button hide-aside-button"} onClick={handleClick} />
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
        </aside>
    )
}