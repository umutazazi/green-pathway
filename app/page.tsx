'use client'
import { useRouter } from 'next/navigation'
import { Provider } from 'react-redux';

import { Component } from 'react';




export default function Home() {
  const router = useRouter()



  return (


    <main>
      <div className="hero min-h-screen w-full h-full" >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-boldt text-green-600">Welcome to Green Pathway</h1>
            <p className="mb-5 text-green-950">Ready to take a step towards a sustainable future? Green Pathway is here to help you understand and reduce your environmental impact. Now you have all the tools you need to track your carbon footprint, develop eco-friendly habits, and embrace a more sustainable lifestyle.</p>
            <button className="btn btn-secondary text-white " onClick={() => router.push('/calculate')}>Get Started</button>
          </div>
        </div>
      </div>
    </main>



  )
}
