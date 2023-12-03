import React from "react";
import {  NavLink } from "react-router-dom";


const NavBar = ()=>{

    return (
        <div id="navBar">
            <div className="nav-left">
                <p>Dictionary App</p>
            </div>

            <div className="nav-right">
                <NavLink className={"nav"} to={"/"}>Home</NavLink>
                <NavLink className={"nav"} to={"/history"}>History</NavLink>
            </div>
        </div>
    )
}

export default NavBar;



