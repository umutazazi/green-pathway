'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { dataAdded } from '@/redux/dataSlice';
import { useRouter } from 'next/navigation'
import { createData, fetchData, updateData, deleteData } from '@/pages/api/data'




const CalculateCard = () => {
    const [monthlyKwh, setMonthlyKwh] = useState(0)
    const [monthlyGas, setMonthlyGas] = useState(0)
    const [monthlyOil, setMonthlylOil] = useState(0)
    const [date, setDate] = useState('')
    const router = useRouter()




    const dispatch = useDispatch()


    const submitData = async (co2: any, kwh: any, gas: any, oil: any, date: any) => {
        try {
            const body = { kwh, gas, oil, date, co2 }
            await createData(body);

        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const co2 = parseInt(calculateEmission())

        if (monthlyKwh && monthlyGas && monthlyOil && date) {
            dispatch(
                dataAdded({
                    id: nanoid(),
                    date,
                    co2,
                    kwh: monthlyKwh,
                    gas: monthlyGas,
                    oil: monthlyOil,

                })
            )
            setDate('');

            submitData(co2, monthlyKwh, monthlyGas, monthlyOil, date)






        }
    };

    function calculateEmission() {

        const kgCO2ePerMWh: any = 0.478;
        const kgCO2PerMetrekup: any = 0.234;
        const kgCO2PerLitreBenzin: any = 2.33;

        // Karbon emisyonunu hesapla
        const OilCo2: any = monthlyOil * kgCO2PerLitreBenzin;
        // Karbon emisyonunu hesapla
        const m3Co2: any = monthlyGas * kgCO2PerMetrekup;
        // Aylık karbon emisyonunu hesapla
        const kwhCo2: any = monthlyKwh * kgCO2ePerMWh;

        const totalCo2: any = (OilCo2 + m3Co2 + kwhCo2);

        return totalCo2;

    } return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20 p-8 mb-6 card-hover">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Calculate Your Carbon Footprint
                    </h2>
                    <p className="text-gray-600">Enter your monthly usage data to track your environmental impact</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">                        <div className="space-y-2">
                        <label htmlFor="monthlyKwh" className="flex items-center text-gray-700 font-semibold text-sm">
                            <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Electricity Usage (kWh)
                        </label>
                        <input
                            type="number"
                            id="monthlyKwh"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-400 text-gray-700 transition-colors duration-200 bg-gray-50/50"
                            value={monthlyKwh}
                            onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                            placeholder="e.g., 350"
                            required
                        />
                    </div>                        <div className="space-y-2">
                            <label htmlFor="monthlyGas" className="flex items-center text-gray-700 font-semibold text-sm">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                </svg>
                                Gas Usage (kWh)
                            </label>
                            <input
                                type="number"
                                id="monthlyGas"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-400 text-gray-700 transition-colors duration-200 bg-gray-50/50"
                                value={monthlyGas}
                                onChange={(e) => setMonthlyGas(Number(e.target.value))}
                                placeholder="e.g., 150"
                                required
                            />
                        </div>                        <div className="space-y-2">
                            <label htmlFor="monthlyLt" className="flex items-center text-gray-700 font-semibold text-sm">
                                <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                Fuel Usage (liters)
                            </label>
                            <input
                                type="number"
                                id="monthlyLt"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-400 text-gray-700 transition-colors duration-200 bg-gray-50/50"
                                value={monthlyOil}
                                onChange={(e) => setMonthlylOil(Number(e.target.value))}
                                placeholder="e.g., 80"
                                required
                            />
                        </div>                        <div className="space-y-2">
                            <label htmlFor="month" className="flex items-center text-gray-700 font-semibold text-sm">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Date
                            </label>
                            <input
                                type="date"
                                id="month"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-400 text-gray-700 transition-colors duration-200 bg-gray-50/50"
                                value={date}
                                onChange={(e) => setDate((e.target.value).toUpperCase())}
                                required
                            />
                        </div>
                    </div>

                    {/* Preview calculation */}
                    {(monthlyKwh > 0 || monthlyGas > 0 || monthlyOil > 0) && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Estimated CO₂ Emission:</span>
                                <span className="text-2xl font-bold text-green-600">
                                    {calculateEmission().toFixed(1)} kg
                                </span>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={async (e) => {
                            router.push("/calculate");
                            e.preventDefault();
                            await handleSubmit(e);
                        }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Calculate & View Dashboard</span>
                    </button>
                </form>
            </div>

            {/* Tips section */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Quick Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Check your utility bills for accurate kWh readings</span>
                    </div>
                    <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Include all fuel consumption for transportation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Regular tracking helps identify reduction opportunities</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalculateCard;