import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0AA83F", "#D62B3C"];

const PieChartComp = () => {
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
    <div className=" rounded-md border-lines max-w-7xl my-10 mx-auto px-4 sm:px-6 lg:px-8">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
          className="text-white"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComp;
