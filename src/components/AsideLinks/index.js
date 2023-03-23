import React from "react";
import './index.css';

export const AsideLink = (props) => {
    return (
        <a {...props}>{props.children}</a>
    )
}