'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { dataAdded } from '@/redux/dataSlice';
import { useRouter } from 'next/navigation'

const CalculateCard = () => {
    const [monthlyKwh, setMonthlyKwh] = useState(0)
    const [monthlyGas, setMonthlyGas] = useState(0)
    const [monthlyLt, setMonthlyLt] = useState(0)
    const [month, setMonth] = useState('')
    const router = useRouter()

    const dispatch = useDispatch()

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const co2 = parseInt(calculateEmission())

        if (monthlyKwh && monthlyGas && monthlyLt && month) {
            dispatch(
                dataAdded({
                    id: nanoid(),
                    month,
                    co2
                })
            )

            setMonth('')


        }
    };

    function calculateEmission() {

        const kgCO2ePerMWh: any = 0.478;
        const kgCO2PerMetrekup: any = 0.234;
        const kgCO2PerLitreBenzin: any = 2.33;

        // Karbon emisyonunu hesapla
        const LtCo2: any = monthlyLt * kgCO2PerLitreBenzin;
        // Karbon emisyonunu hesapla
        const m3Co2: any = monthlyGas * kgCO2PerMetrekup;
        // Aylık karbon emisyonunu hesapla
        const kwhCo2: any = monthlyKwh * kgCO2ePerMWh;

        const totalCo2: any = (LtCo2 + m3Co2 + kwhCo2);

        return totalCo2;

    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Enter Your Monthly Usages</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="monthlyKwh" className="block text-gray-700 font-semibold mb-2">Total electiricty as kWh</label>
                    <input
                        type="number"
                        id="monthlyKwh"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary text-gray-700 "
                        value={monthlyKwh}
                        onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                        required
                    />
                    <label htmlFor="monthlyGas" className="block text-gray-700 font-semibold mb-2">Total gas as kWh</label>
                    <input
                        type="number"
                        id="monthlyGas"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary text-gray-700 "
                        value={monthlyGas}
                        onChange={(e) => setMonthlyGas(Number(e.target.value))}
                        required
                    />
                    <label htmlFor="monthlyLt" className="block text-gray-700 font-semibold mb-2">Total fuel as lt</label>
                    <input
                        type="number"
                        id="monthlyLt"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary text-gray-700 "
                        value={monthlyLt}
                        onChange={(e) => setMonthlyLt(Number(e.target.value))}
                        required
                    />
                    <label htmlFor="month" className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input
                        type="date"
                        id="month"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary text-gray-700 "
                        value={month}
                        onChange={(e) => setMonth((e.target.value).toUpperCase())}
                        required
                    />
                </div>

                <button onClick={() => { router.push("/calculate") }} type="submit" className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:bg-green-600">
                    Calculate
                </button>
            </form>
        </div>
    );
};

export default CalculateCard;