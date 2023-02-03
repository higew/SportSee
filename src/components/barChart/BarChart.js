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
        

    return (
        <div className="activity-graph">
            <ResponsiveContainer aspect={3}>
                <BarChart width="60%" height={300} data={data} barCategoryGap={18} barGap={6} margin={{top: 50, right: 10, left: 40, bottom: 5}}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="nameXAxis" tickLine={false} tick={{ fontSize: 14, fontWeight: 500 }} dy={10}/>
                    <YAxis yAxisId={"kg"} dataKey="kg" domain={["dataMin - 2", "dataMax + 2"]} tick={{ fontWeight: "500", fontSize: "14px" }} tickMargin={40} tickLine={false} orientation="right" axisLine={false}/>
                    <YAxis yAxisId={"kcal"}  hide={true}  domain={["dataMin - 100", "dataMax "]}  />
                    <Tooltip />
                    <Bar yAxisId={"kg"} dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar yAxisId={"kcal"} dataKey="kcal" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartDiagram;