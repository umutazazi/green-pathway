"use client";
import React, { useEffect, useState } from "react";
import BarChartPlot from "../components/BarChartPlot";
import PieChartPlot from "../components/PieChartPlot";
import RadarChartPlot from "../components/RadarChartPlot";

import { fetchData } from "@/pages/api/data";
import { getEstimations } from "@/pages/api/data";

function Charts() {
  const [data, setData] = useState([]);
  const [totalCo2, setTotalCo2] = useState(0);
  const [dataJson, setDataJson] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);

        const co2Sum = responseData.reduce(
          (sum, record) => sum + (record.co2 || 0),
          0
        );
        setTotalCo2(co2Sum);

        // Fetch data from Flask API after setting data
        const responseJson = await getEstimations(responseData);
        setDataJson(responseJson);
        console.log("responseJson", JSON.stringify(responseJson));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Co2 Of Last Month</p>
              <p className="py-4 font-bold text-red-400">
                {data.length > 0 ? (data[data.length - 1].co2 || 0) + "kg" : 0}
              </p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Co2</p>
              <p className="py-4 font-bold text-red-400">{totalCo2} kg</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[300px] bg-white rounded">
          <BarChartPlot data={data} color={"#EF5350"} />
        </div>

        <div className="w-1/2 h-[300px] bg-white rounded">
          <PieChartPlot data={data} />
        </div>
      </section>
      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/2 h-[250px] bg-white rounded">
          <BarChartPlot data={dataJson} color={"#228B22"} />
          <div className="mt-4 font-bold text-center">
            Estimation of next 3 months
          </div>
        </div>
        <div className=" w-1/2 h-[250px] bg-white rounded">
          <RadarChartPlot data={data} />
        </div>
      </section>
    </>
  );
}

export default Charts;
