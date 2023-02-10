import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BarChartDiagram from '../../components/barChart/BarChart';
import LineChartDiagram from '../../components/lineChart/LineChart';
import RadarChartDiagram from '../../components/radarChart/RadarChart';
import PieChartDiagram from '../../components/pieChart/PieChart';
import DataCount from '../../components/dataCount/DataCount';
import { apiCall, newUserData } from '../../services/Api';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../../services/data'
import './dashboard.css'

/** This function renders the dashboard.
 * 
 * The userId is defined with the number in the url.
 * 
 * If the userId is 12, then the data is fetched from the index [0] from the mockdatas.
 * 
 * If the userId is 18, then the data is fetched from the index [1] from the mockdatas.
 * 
 * First the data is fetched from the API. 
 * If the data is not fetched from the API, then we take the mocked datas from the index [0 or 1].
 * 
 * @returns graphs components with the props datas (BarChartDiagram, LineChartDiagram, 
 *  RadarChartDiagram and PieChartDiagram) and also returns some Data informations about calories.
 * @param {string} id
 * @param {number} userId
 * @param {object} datas
 * @param {object} newUserDataMock
 * @param {object} newUserData
 */

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

        const getData = async () => {
            await apiCall(userId);
            setDatas({...newUserData})

            if (!newUserData.user) {
                console.log('Going into condition to show MockData')
                setDatas({...newUserDataMock})
            }
        } 
        // const interval = setInterval(() => {
        //     getData();
        // }, 100)
        // setTimeout(function() {
        //     clearInterval(interval)
        // }, 200)
        getData();
        console.log(newUserData)
    },[userId] );

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
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="graph">
                    <div className="global-graph">
                        <BarChartDiagram datas={datas}/>
                        <div className="graph-bottom">
                            <LineChartDiagram datas={datas}/>
                            <RadarChartDiagram datas={datas}/>
                            <PieChartDiagram datas={datas}/>
                        </div>
                    </div>
                    <DataCount datas={datas}/>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;