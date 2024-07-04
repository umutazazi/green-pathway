"use client";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartPlot = ({ data, color }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="co2" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default BarChartPlot;
