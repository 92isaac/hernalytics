import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#0AA83F", "#D62B3C"];

const PieChartComponent = () => {
  const data = [
    { name: "Total Vote", value: 16891222 },
    { name: "Rejected Vote", value: 8400000 },
    // { name: "Accepted Vote", value: 160512222 },
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="#000" textAnchor="middle" dominantBaseline="central">
        {`${value}`}
      </text>
    );
  };

  return (
    <div className="mx-auto w-full md:w-1/2 text-white">
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
