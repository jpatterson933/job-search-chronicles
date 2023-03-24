import React from "react";
import './index.css';
import { AsideContainer, NavContainer } from "./containers";

export const LandingPage = () => {
    return (
        // we are doing flex with the direction being a row for the header elements 
        <header id="content">
            <AsideContainer />
            <NavContainer />
        </header>
    )
}