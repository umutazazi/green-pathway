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
    <div className="p-6 space-y-6">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Last Month CO₂
                    </p>
                    <p className="text-3xl font-bold text-red-500">
                      {data.length > 0 ? data[data.length - 1].co2 || 0 : 0}
                      <span className="text-lg text-gray-500 ml-1">kg</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 bg-red-50 px-2 py-1 rounded-full">
                  Recent
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Total CO₂ Emissions
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {totalCo2}
                      <span className="text-lg text-gray-500 ml-1">kg</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded-full">
                  All Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 card-hover overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Monthly Emissions
            </h3>
          </div>
          <div className="h-[280px] p-4">
            <BarChartPlot data={data} color={"#EF5350"} />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 card-hover overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
              </svg>
              Distribution by Period
            </h3>
          </div>
          <div className="h-[280px] p-4">
            <PieChartPlot data={data} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 card-hover overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Future Predictions
            </h3>
            <p className="text-sm text-gray-600">
              AI-powered estimation for the next 3 months
            </p>
          </div>
          <div className="h-[220px] p-4">
            <BarChartPlot data={dataJson} color={"#22C55E"} />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 card-hover overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              Radar Analysis
            </h3>
            <p className="text-sm text-gray-600">
              Comprehensive emission patterns
            </p>
          </div>
          <div className="h-[220px] p-4">
            <RadarChartPlot data={data} />
          </div>
        </div>
      </section>

      {/* Environmental Impact Summary */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Environmental Impact
          </h3>
          <p className="text-gray-600">Understanding your carbon footprint</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/60 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Trees Needed</h4>
            <p className="text-sm text-gray-600">
              {Math.ceil(totalCo2 / 22)} trees to offset
            </p>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Efficiency Score</h4>
            <p className="text-sm text-gray-600">
              {Math.max(100 - Math.floor(totalCo2 / 10), 10)}% eco-friendly
            </p>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-xl">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800">Trend</h4>
            <p className="text-sm text-gray-600">
              {data.length > 1 &&
              data[data.length - 1].co2 < data[data.length - 2].co2
                ? "Improving"
                : "Monitor"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Charts;
