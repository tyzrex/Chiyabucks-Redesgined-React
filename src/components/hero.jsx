import React from 'react'
import Typed from 'react-typed';
import Teaposter from '../assets/t.jpg'

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-full mt-[-20px] w-full h-[60vh] mx-auto text-center lg:flex lg:justify-around lg:items-center md:grid grid gap-0 items-center justify-center nav'>
            <div>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 md:max-w-xl'>Start your day with a cup of <p className='text-green-600'>positivi tea.</p></h1>
            </div>
            
            <div>
                <div className='flex justify-center items-center'>
                        <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4 text-green-600'>We serve: </p>
                    <Typed className ='ml-2 md:text-[2rem] sm:text-3xl text-xl text-yellow-500 font-bold'strings={['Masala Chiya','Tandoori Chiya','Green Tea','Matka Chiya']}
                        typeSpeed={120} backSpeed={140} loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold md:max-w-lg text-gray-400 md:pl-4 pl-2'>
                    So what are you waiting for? Get your cup of tea now!
                </p>
                <button className='bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero