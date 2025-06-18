'use client'
import { useRouter } from 'next/navigation'
import { Provider } from 'react-redux';

import { Component } from 'react';




export default function Home() {
  const router = useRouter()



  return (


    <main className="relative min-h-screen overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative hero min-h-screen w-full h-full flex items-center justify-center">
        <div className="hero-content text-center max-w-4xl px-4">
          <div className="backdrop-blur-sm bg-white/30 rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h1 className="mb-6 text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Welcome to Green Pathway
              </h1>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Ready to take a step towards a sustainable future? Green Pathway is here to help you understand and reduce your environmental impact.
                <span className="block mt-2 font-medium text-green-700">
                  Track your carbon footprint, develop eco-friendly habits, and embrace a more sustainable lifestyle.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="btn btn-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300 px-8"
                onClick={() => router.push('/calculate')}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started
              </button>
              <button
                className="btn btn-lg btn-outline border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500 px-8 transition-all duration-300"
                onClick={() => router.push('/about')}
              >
                Learn More
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Track Emissions</h3>
                <p className="text-sm text-gray-600">Monitor your carbon footprint with detailed analytics</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Future Predictions</h3>
                <p className="text-sm text-gray-600">Get insights and predictions for sustainable planning</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Build sustainable habits for a greener future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>



  )
}
