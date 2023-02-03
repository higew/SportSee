import React, { useEffect, useState} from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import './lineChart.css';

function LineChartDiagram ({datas}) {
    const initialDayWeek = ["L", "M", "M", "J", "V", "S", "D"];
    const [averageTime, setAverageTime] = useState([]);
    useEffect(() => {
        if (datas.session?.sessions) {
            setAverageTime(datas.session?.sessions);
        }
    }, [datas]);


    const data = averageTime.map((element) => {
        return {
            initialDayWeek: initialDayWeek[element.day - 1],
            sessionLength: element.sessionLength,
        };
    });

    const CustomTooltip = ({ active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="linechart-tooltip" style={{backgroundColor: "white", marginTop: "0px", marginLeft: "0px",}}>
                    <p className="linechart-tooltip-item" style={{fontSize: "10px", color: "black", padding: "10px",}}>{`${payload[0].value + "min"}`}</p>
                </div>
            );
        }
    };

    const CustomHover = ({ points }) => {
        return (
            <rect x={points[0].x} y={0} height="100%" width="100%" fill="rgba(0, 0, 0, 0.1)"/>
        );
    };

    return (
        <div className='line-chart-section'>
            <h2 className='title-line-chart'>Durée moyenne des sessions</h2>
            <ResponsiveContainer aspect={1}>
            <LineChart width={260} height={280} data={data} 
                margin={{
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="initialDayWeek" tickLine={false} axisLine={false} tickMargin={0} stroke='rgba(255, 255, 255, 0.5)'
                    padding={{ left: 5, right: 5}} fontSize={14} fontWeight={400}/>
                <YAxis hide="true" domain={['dataMin-10', 'dataMax+20']}/>
                <Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />
                <Line type="monotone" dataKey="sessionLength" stroke='rgba(255, 255, 255, 0.6)' strokeWidth={1.5} dot={false} 
                    activeDot={{
                        stroke: "rgba(255, 255, 255, 0.2)",
                        strokeWidth: 5,
                        r: 5,
                    }}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartDiagram;