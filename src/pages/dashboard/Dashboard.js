import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './dashboard.css'

function Dashboard() {
    let username = "Utilisateur";
    return (
        <div className="wrapper">
            <section className="navigation">
                <Navbar></Navbar>
                <Sidebar></Sidebar>
            </section>
            <section className="main">
                <div className="user">
                <h1>
                    Bonjour
                    <span className="username"> {username}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;