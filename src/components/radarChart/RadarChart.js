import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import "./radarChart.css"
import React, { useEffect, useState } from "react";

function RadarChartDiagram({ datas }) {
    const categories = ["Cardio" , "Energie" , "Endurance" , "Force" , "Vitesse" , "Intensité"];
    const [sessionPerf, setSessionPerf] = useState([]);

    useEffect(() => {
    if (datas.performance?.data.length >= 1)  {
        setSessionPerf(datas.performance?.data);
    }
    }, [datas]);


    const data = sessionPerf.map((item) => {
        return {
        value: item.value,
        kind: categories[item.kind - 1],
        };
    });

    return (
        <div className="radar">
            <RadarChart cx="50%" cy="50%" outerRadius="68%"  width={280} height={280} data={data} className="radarChart">
                <PolarGrid  polarRadius={[10,21,45,65,90]} radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={{fontWeight: "500", fontSize: "0.7em", transform: 'translate(-3, 3)'}} stroke="white" axisLine={false} tickLine={false}/>
                <Radar dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)"/>
            </RadarChart>
        </div>
    );
};

export default RadarChartDiagram;