import React from "react";
import { NavLink } from "../NavLink";
import './index.css';
export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <NavLink href="https://jpatterson933.github.io/resume/">Resume</NavLink>
            <NavLink href="https://main--tourmaline-palmier-f34cc1.netlify.app/">Portfolio</NavLink>
            <NavLink href="https://github.com/jpatterson933">Github</NavLink>
            <NavLink href="https://www.linkedin.com/in/jefferywpatterson/">LinkedIn</NavLink>
            <NavLink href="https://wellfound.com/u/jeffery-patterson-1">Wellfound</NavLink>
            <NavLink href="https://www.upwork.com/freelancers/~01d6d35dad50ce2efd?viewMode=1">Upwork</NavLink>
        </nav>
    )
}