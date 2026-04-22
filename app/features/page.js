import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { integrations } from '../../lib/integration'
import Image from 'next/image'

export default function FeaturesPage() {

  return (

    <div className='container mx-auto py-2'>

      <Navbar />
      <div className='min-h-screen flex flex-col items-center justify-center'>

        <ul>
          {
            integrations.map((integration) => (
              <li key={integration.id}>
                <Image
                  src={integration.icon}
                  alt={integration.title}
                  width={50}
                  height={50}
                />
                <h1>{integration.title}</h1>
                <p>{integration.description}</p>
              </li>
            ))
          }
        </ul>


      </div>
      <Footer />

    </div>
  )
}
