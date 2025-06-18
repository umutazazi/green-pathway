'use client'
import React from 'react'

import CalculateCard from '@/components/CalculateCard'
import { Provider } from 'react-redux'
import store from '../store'




const CarbonData = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <div className="p-6">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Green Pathway
                  </h1>
                </div>
                <nav className="flex space-x-4">
                  <a href="/calculate" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
                    Dashboard
                  </a>
                  <a href="/about" className="text-gray-600 hover:text-green-600 transition-colors duration-200 font-medium">
                    About
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex items-center justify-center p-6">
            <CalculateCard />
          </div>
        </div>
      </div>
    </Provider>



  )
}

export default CarbonData