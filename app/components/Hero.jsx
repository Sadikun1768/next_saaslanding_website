import React from 'react'

export default function Hero() {
  return (
    <div className='container py-24'>
      <div className='flex justify-center'>
        <div className='inline-flex py-1 px-5 bg-gradient-to-r from-purple-900 to-cyan-700 rounded-full font-semibold'>$7.5 seed round raised</div>
      </div>


      <h1 className='text-6xl font-medium text-center mt-6'>Impactfull design, create effortless experiences</h1>
      <p className='text-center text-xl text-white/50 mt-8'>Featuring stories about species protection, climate change, renewable energy, and more! Together, we can spread environmental
        awareness and keep our planet clean. Be Proud of your City. Join The World Mission</p>

      <form className='flex justify-between border border-white/15 rounded-full p-4 mt-8'>
        <input
          type='email'
          className='bg-transparent px-4 text-sm'
          placeholder='Please Enter Your Name'
        />
        <button
          type='submit'
          className='p-2 bg-cyan-900 hover:bg-cyan-50 hover:text-black text-white rounded text-sm'
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}
