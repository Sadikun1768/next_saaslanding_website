import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


export default function FaqsPage() {
  return (

    <div className='container mx-auto mt-15'>

      <Navbar />

      <div className='w-fit mx-auto'>
        <div className='text-center border rounded-full text-lime-700 py-2 px-4 mt-20 mx-auto w-fit'>Faqs Page</div>
        <h1 className='text-center text-3xl font-bold mt-10'>Questions? We've Got <span className='text-lime-400'>Answers</span></h1>

        <div className='flex items-center justify-between border-b-2 rounded-2xl py-3 px-2 mt-10'>
          <div className=''>
            <h1 className='mb-6'>How is Layers different from other design tools?</h1>
            <p className=''>Unlike traditional design tools, Layers offers a unique approach to design and prototyping. Our intelligent introduction to design thinking sets us apart.</p>
          </div>

          <span className='text-lime-600 font-bold text-2xl'>x</span>
        </div>

        <div className='flex items-center justify-between border-b-2 rounded-2xl py-3 px-3 mt-10'>
          <h1 className='mb-6'>Can I use Layers for free?</h1>
          <span className='text-lime-600 font-bold text-2xl'>+</span>
        </div>
        <div className='flex items-center justify-between border-b-2 rounded-2xl py-3 px-3 mt-10'>
          <h1 className='mb-6'>How do you handle version control?</h1>
          <span className='text-lime-600 font-bold text-2xl'>+</span>
        </div>
        <div className='flex items-center justify-between border-b-2 rounded-2xl py-3 px-3 mt-10'>
          <h1 className='mb-6'>Can I work offline?</h1>
          <span className='text-lime-600 font-bold text-2xl'>+</span>
        </div>
        <div className='flex items-center justify-between border-b-2 rounded-2xl py-3 px-3 mt-10'>
          <h1 className='mb-6'>How does Layers handle collaboration?</h1>
          <span className='text-lime-600 font-bold text-2xl'>+</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
