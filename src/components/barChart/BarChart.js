import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import './barChart.css'
import PropTypes from "prop-types"

/**
 * Using a useEffect hook to set the state of activityData to the data to display in the
 * BarChart.
 * @returns The BarChart component
 * @param {object} datas
 * @param {object} activityData
 * @param {object} data
 * @param {object} payload
 * @component BarChartDiagram
 * 
 */

function BarChartDiagram ({datas}) {
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        if (datas.activity?.sessions.length >= 1)  {
        setActivityData(datas.activity?.sessions);
        }
    }, [datas]);

        const data = activityData.map((element, index) => {
        return {
            nameXAxis: index + 1,
            kg: element.kilogram,
            kcal: element.calories
        };
        });

        const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="custom-tooltip">
                        <p className="barchart-tooltip-item">{`${payload[0].value + "kg"}`}</p>
                        <p className="barchart-tooltip-item">{`${payload[1].value + "Kcal"}`}</p>
                    </div>
                );
            }
        
            return null;
        };
        

    return (
        <div className="activity-graph">
            <div className="legend-container">
                <div className="title">Activité quotidienne</div>
                <div className="barchart-legend">
                    <div className="barchart-legend-item">
                        <span id="barchart-legend-item-icon-kg"></span>
                        <span className="barchart-legend-item-text">
                            Poids (kg)
                        </span>
                    </div>
                    <div className="barchart-legend-item">
                        <span id="barchart-legend-item-icon-kcal"></span>
                        <span className="barchart-legend-item-text">
                            Calories brûlées (kCal)
                        </span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer aspect={3}>
                <BarChart width="60%" height={300} data={data} barCategoryGap={18} barGap={6} margin={{top: 50, right: 10, left: 40, bottom: 5}}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="nameXAxis" tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} dy={10}/>
                    <YAxis yAxisId={"kg"} dataKey="kg" domain={["dataMin - 2", "dataMax + 2"]} tick={{ fontWeight: "500", fontSize: "14px" }} tickMargin={40} tickLine={false} orientation="right" axisLine={false}/>
                    <YAxis yAxisId={"kcal"}  hide={true}  domain={["dataMin - 100", "dataMax "]}  />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar yAxisId={"kg"} dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar yAxisId={"kcal"} dataKey="kcal" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartDiagram;

BarChartDiagram.propTypes = {
    datas: PropTypes.shape({
        activity: PropTypes.shape({
            sessions: PropTypes.any.isRequired,
            nameXAxis: PropTypes.string,
            kg: PropTypes.number,
            kcal: PropTypes.number,
        })
    })
};