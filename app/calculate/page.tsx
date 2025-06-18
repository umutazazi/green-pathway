'use client'
import React, { useState } from 'react'

import Charts from "../../components/Charts";
import NavBar from "../../components/NavBar";
import { Provider } from 'react-redux';
import store from './store'


const Calculate = () => {

  return (

    <>
      <Provider store={store}>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <NavBar />
            <Charts />
          </div>
        </div>
      </Provider>



    </>


  )
}

export default Calculate