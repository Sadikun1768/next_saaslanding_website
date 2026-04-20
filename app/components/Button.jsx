import React from 'react'

export default function Button() {
    return (
        <div className='flex gap-3'>
            <button type="submit" className="border border-white text-white hover:bg-lime-700 p-3 rounded  gap-3">Sign In</button>
            <button type="submit" className="border border-white text-white hover:bg-lime-700 p-3 rounded">Sign Up</button>
        </div>


    )
}
