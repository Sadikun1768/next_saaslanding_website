import React from 'react'
import Navbar from '../components/Navbar'
import Integrations from '../components/Integrations'
import Footer from '../components/Footer'
export default function IntegrationPage() {
  return (
    <div className='container mx-auto py-2'>

      <Navbar />
      
      <div className='container'>
         <Integrations />
      </div>


     <Footer />

    </div>
  )
}
