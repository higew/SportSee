import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import "./radarChart.css"
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"

/**
 * Using a useEffect hook to set the state of sessionPerf to the data to display in the
 * RadarChart.
 * @returns The RadarChart component
 * @param {object} datas
 * @param {string} categories
 * @param {object} sessionPerf
 * @param {object} data
 * @component RadarChartDiagram
 */

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
            <ResponsiveContainer aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="68%"  width={280} height={280} data={data} className="radarChart">
                <PolarGrid  polarRadius={[10,21,45,65,90]} radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tick={{fontWeight: "500", fontSize: "0.7em", transform: 'translate(-3, 3)'}} stroke="white" axisLine={false} tickLine={false}/>
                <Radar dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)"/>
            </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarChartDiagram;

RadarChartDiagram.propTypes = {
    datas: PropTypes.shape({
        performance: PropTypes.shape({
            data: PropTypes.any.isRequired,
            value: PropTypes.number,
            kind: PropTypes.object.isRequired,
        })
    })
}