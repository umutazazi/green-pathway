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
        <div className="flex">
          <main className="flex-grow ">
            <NavBar />
            <Charts />
          </main>
        </div>
      </Provider>



    </>


  )
}

export default Calculate