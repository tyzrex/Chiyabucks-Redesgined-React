import React from 'react'
import Chiya from '../assets/tea.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-[#F9FAF8] pt-12 pb-20 grid content-center justify-items-center text-center'>
            <div className='font-mono mb-10'><h1 className='text-4xl text-yellow-500 font-bold'>About Us</h1></div>

        <div className='max-w-[1500px] grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center'>
            <img src={Chiya} alt="/" className='w-[500px] md:w-[650px] mx-6 rounded-lg'/>
            <div className='grid grid-cols-1 max-w-[400px] md:max-w-[600px] lg:max-w-none items-center justify-center mt-5'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Organic Tea like no where else.</h1>
                <p className=''>Lorem ipsum Repellat maxime cum, ipsam eveniet suscipit obcaecati? Fuga cum nesciunt cupiditate, necessitatibus accusantium animi nam aperiam? Placeat, itaque impedit laborum iste et delectus eos optio aperiam provident, iure numquam qui!</p>
                <div className='grid content-center justify-items-center'>
                <button className=' bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white md:mx-0'>Order Now</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics