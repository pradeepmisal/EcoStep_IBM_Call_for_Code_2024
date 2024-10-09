// EmissionsChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const EmissionsChart = ({ emissions }) => {
  const data = [
    { name: "Personal", value: emissions.personal },
    { name: "Flight", value: emissions.flight },
    { name: "Electricity", value: emissions.electricity },
    { name: "Vehicle", value: emissions.vehicle },
  ].filter((item) => item.value > 0); // Filter out zero emissions

  return (
    <ResponsiveContainer width="100%" height={400}>
      {data.length > 0 ? (
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            animationDuration={800}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} kg`, "CO2 Emissions"]} />
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      ) : (
        <div style={{ textAlign: "center", fontSize: "16px", color: "#666" }}>
          No emissions data available. Please input your emissions data to see
          the results.
        </div>
      )}
    </ResponsiveContainer>
  );
};

export default EmissionsChart;
