import React from "react";
import './index.css';

export const NavLink = (props) => {
    return (
        <a className="nav-links" {...props}>{props.children}</a>
    )
}