import React from "react";
import './index.css';

export const AsideLink = (props) => {
    return (
        <a className="aside-links" {...props}>{props.children}</a>
    )
}