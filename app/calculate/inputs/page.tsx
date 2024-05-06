'use client'
import React from 'react'

import CalculateCard from '@/components/CalculateCard'
import { Provider } from 'react-redux'
import store from '../store'




const CarbonData = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-col mt-12'>
        <CalculateCard />


      </div>
    </Provider>



  )
}

export default CarbonData