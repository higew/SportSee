import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./navbar.css"

function Navbar() {
    return (
        <header>
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <nav>
                <Link to={"/"}>
                    <li>Accueil</li>
                </Link>
                <Link to={"#"}>
                    <li>Profil</li>
                </Link>
                <Link to={"#"}>
                    <li>Réglage</li>
                </Link>
                <Link to={"#"}>
                    <li>Communauté</li>
                </Link>
            </nav>
            
        </header>
    );
}

export default Navbar;