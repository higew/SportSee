import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { BarChartDiagram } from '../../components/barChart/BarChart';
import { USER_MAIN_DATA } from "../../assets/data/data";
import './dashboard.css'

function Dashboard() {
    let username = USER_MAIN_DATA[0].userInfos.firstName;

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
                <BarChartDiagram />
            </section>
        </div>
    );
}

export default Dashboard;