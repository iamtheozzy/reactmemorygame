import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <p className="navbar-brand cust-text" href="#">Test Your Memory!</p>
        <p className="nav-link-center cust-text"> Click an image below to start! </p>
        <p className="nav-link-right cust-text"> Score: <span>{props.count}</span> |  Top Score: <span>{props.topCount}</span></p>
    </nav>
);

export default NavBar;