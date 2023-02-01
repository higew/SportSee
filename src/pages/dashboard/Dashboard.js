import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BarChartDiagram from '../../components/barChart/BarChart';
import LineChartDiagram from '../../components/lineChart/LineChart';
import RadarChartDiagram from '../../components/radarChart/RadarChart';
import { apiCall, newUserData } from '../../services/Api';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../../services/data'
import './dashboard.css'

function Dashboard() {
    const { id } = useParams()
    const userId = Number(id)
    const [datas, setDatas] = useState({});

    useEffect(() => {
        let newUserDataMock;
        
        if (userId === 12 ) {
            newUserDataMock = { user : USER_MAIN_DATA[0], activity: USER_ACTIVITY[0], session: USER_AVERAGE_SESSIONS[0], performance: USER_PERFORMANCE[0] };
        } else if (userId === 18 ) {
            newUserDataMock = { user : USER_MAIN_DATA[1], activity: USER_ACTIVITY[1], session: USER_AVERAGE_SESSIONS[1], performance: USER_PERFORMANCE[1] };
        }

        async function getData() {
            await apiCall(userId);
            setDatas(() => ({...newUserData}))
            
            if (!newUserData.user || newUserData == null || newUserData === undefined || newUserData.length === 0) {
                setDatas(() => ({...newUserDataMock}))
            }
        }
    
        getData();
    },[userId] );
    console.log(newUserData);   

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
                        <span className="username"> {datas.user?.userInfos.firstName}</span>
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <BarChartDiagram datas={datas}/>
                <LineChartDiagram datas={datas}/>
                <RadarChartDiagram datas={datas}/>
            </section>
        </div>
    );
}

export default Dashboard;