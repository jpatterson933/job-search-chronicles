import React from "react";
import { AsideBar } from "../components/Aside";
import { Nav } from "../components/Nav";
import './index.css';
import styles from './HeaderContainer.module.css';

export const AsideContainer = () => { return <AsideBar /> }
export const NavContainer = () => { return <Nav /> }
export const HeaderContainer = () => {
    const headerStyles = {
        background: "transparent",
        color: "darkblue",
        padding: "1em",
        width: "fit-content",
        border: "2px dashed",
        borderRadius: "0 32px 0 32px"
    }
    return (
        <header id="header" className={styles.header}>
            <h1 style={headerStyles}>
                Rejection Chronicles
                <span className={styles.sheen}></span>
                </h1>
            <NavContainer />
        </header>
    )
}