import React, { useState } from "react";
import { AsideLink } from "../AsideLinks";
import './index.css';
export const AsideBar = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <aside className="aside-bar">
            <AsideLink rel="external" href="https://jpatterson933.github.io/resume/">Resume</AsideLink>
            <AsideLink rel="external" href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</AsideLink>
            <AsideLink rel="external" href="https://github.com/jpatterson933">Github</AsideLink>
            <AsideLink rel="external" href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</AsideLink>
            <AsideLink rel="external" href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</AsideLink>
            <AsideLink rel="external" href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</AsideLink>
            <button className="aside-button">Hide</button>
        </aside>
    )
}