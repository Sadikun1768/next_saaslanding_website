import React from 'react'
import Image from 'next/image'


export default function Hero() {
  return (
    <section className='py-24'>
       <div className='container relative'>

      <div className='absolute -left-5 top-16 md:block hidden'>
        <Image
          className=""
          src="/assets/images/design-example-1.png"
          alt="design-example 1 image"
          width={300}
          height={300}
        />
      </div>
      <div className='absolute -right-5 -top-16 md:block  hidden'>
        <Image
          className=""
          src="/assets/images/design-example-2.png"
          alt="design-example 2 image"
          width={300}
          height={300}
        />
      </div>

      <div className='flex justify-center'>
        <div className='inline-flex py-1 px-5 bg-gradient-to-r from-purple-900 to-cyan-700 rounded-full font-semibold'>
          $7.5 seed round raised
          </div>
      </div>

      <h1 className='text-6xl font-medium text-center mx-auto max-w-2xl mt-6'>Impactfull design, create effortless experiences</h1>
      <p className='text-center text-xl text-white/50 mx-auto max-w-2xl mt-8'>Featuring stories about species protection, climate change, renewable energy, and more! Together, we can spread environmental
        awareness and keep our planet clean. Be Proud of your City. Join The World Mission</p>

      <form className='flex justify-between border-6 border-white/15 rounded-full max-w-lg p-4 mt-8 mx-auto'>
        <input 
          type='email'
          className='bg-transparent px-4 text-sm'
          placeholder='Please Enter Your Name'
        />
        <button
          type='submit'
          className='p-2 bg-lime-700 hover:bg-cyan-50 hover:text-black text-white rounded text-sm'
        >
          Sign Up
        </button>
      </form>
    </div>
    </section>
   
  )
}
