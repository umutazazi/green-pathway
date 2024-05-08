import React, { useEffect } from "react";
import BarChartPlot from "../components/BarChartPlot";
import PieChartPlot from "../components/PieChartPlot";
import RadarChartPlot from "../components/RadarChartPlot";

import { useSelector } from "react-redux";

function Charts() {
  const data = useSelector((state) => state.data);
  const totalCo2 = data.reduce(
    (total, item) => total + (isNaN(item.co2) ? 0 : Number(item.co2)),
    0
  );

  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Co2 Of Last Month</p>
              <p className="py-4 font-bold text-red-400">
                {data[data.length - 1].co2
                  ? data[data.length - 1].co2 + "kg"
                  : 0}
              </p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Co2</p>
              <p className="py-4 font-bold text-red-400">
                {totalCo2 ? totalCo2 + "kg" : 0}{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[300px] bg-white rounded">
          <BarChartPlot />
        </div>

        <div className="w-1/2 h-[300px] bg-white rounded">
          <PieChartPlot />
        </div>
      </section>
      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-default rounded"></div>
        <div className=" w-1/3 h-[250px] bg-white rounded">
          <RadarChartPlot />
        </div>
        <div className=" w-1/3 h-[250px] bg-default rounded"></div>
      </section>
    </>
  );
}

export default Charts;
