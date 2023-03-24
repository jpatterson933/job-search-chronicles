import React, { useState } from "react";
import { AsideLink } from "../AsideLinks";
import './index.css';
export const AsideBar = () => {
    const [show, setShow] = useState();
    const [isClicked, setIsClicked] = useState();
    // we just set the opposit value when the click occurs if isclicked is true, the relevant items will be hidden
    const handleClick = () => {
        setShow(!show)
        setIsClicked(!isClicked)
    }
    // i can create a function or a object that holds the styles, and then a function that alters the styles 
    // on the css property when isClicked is true
    const asideLinkStyles = {
        opacity: 100,
        visibility: "visible",
        transition: "opacity 1s ease-in-out, visibility 1s ease-in-out"
    }
    // visibility 1s ease-in-out and the transition below are both responsible for the fading out
    const noAsideLinkVisible = {
        opacity: 0,
        visibility: "hidden",
        transition: "fade-out 1s ease-in-out forwards"
    }

    return (
        <aside className="aside-bar">
            <button className={isClicked ? "aside-button show-aside-button" : "aside-button hide-aside-button"} onClick={handleClick}></button>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink style={isClicked ? noAsideLinkVisible : asideLinkStyles} rel="external" href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
        </aside>
    )
}