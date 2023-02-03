import React from 'react'
import iconYoga from '../../assets/pictos/yoga-icon.svg'
import iconSwimming from '../../assets/pictos/swimming-icon.svg'
import iconBike from '../../assets/pictos/bike-icon.svg'
import iconBodybuilding from '../../assets/pictos/bodybuilding-icon.svg'
import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidenav">
            <div className={"sportlist-item"} id={"sportlist-item-yoga"}>
                <img src={iconYoga} alt="icon-yoga"/>
            </div>
            <div className={"sportlist-item"} id={"sportlist-item-swimming"}>
                <img src={iconSwimming} alt="icon-swimming"/>
            </div>
            <div className={"sportlist-item"} id={"sportlist-item-bike"}>
                <img src={iconBike} alt="icon-bike"/>
            </div>
            <div className={"sportlist-item"} id={"sportlist-item-bodybuilding"}>
                <img src={iconBodybuilding} alt="icon-bodybuilding"/>
            </div>
            <p className={"sportlist-copyrights"}>Copyright, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;