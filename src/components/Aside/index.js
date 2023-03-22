import React from "react";
import { AsideLink } from "../AsideLinks";
import './index.css';
export const AsideBar = () => {
    return (
        <aside className="aside-bar">
            <h1>Aside Header</h1>
            <AsideLink href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
        </aside>
    )
}