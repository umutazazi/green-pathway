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

import { useSelector } from "react-redux";

const BarChartPlot = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="co2" fill="#EF5350" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default BarChartPlot;
