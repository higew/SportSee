import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { USER_ACTIVITY } from "../../assets/data/data";

export const BarChartDiagram = (props) => {
    const data = [];
    USER_ACTIVITY[0].sessions.forEach((item, index) => {
        data.push({
        nameXAxis: index + 1,
        kg: item.kilogram,
        kcal: item.calories,
        });
    });

    console.log(USER_ACTIVITY[0].sessions.length);
    console.log(data);
    console.log(USER_ACTIVITY[0].sessions);

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