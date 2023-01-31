import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

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
        <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="nameXAxis" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
            <Bar dataKey="kcal" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartDiagram;