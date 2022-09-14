import React from 'react'
import Masala from '../assets/croppedmasala.jpg'
import Green from '../assets/green.png'
import Tandoori from '../assets/tandoori.jpg'
import herbal from '../assets/herbal.png'

const Cards = () => {
  return (
    <div className='w-full py-[4rem] px-4 bg-white grid'>
            <div className='font-mono mb-20 grid content-center justify-items-center'><h1 className='text-4xl text-green-500 font-bold'>Menu</h1></div>
        <div className='max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[280px] mx-auto mt-[-3rem] bg-white rounded-lg' src={Masala} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Masala Tea</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[280px] mx-auto mt-[-3rem] bg-white rounded-lg' src={Tandoori} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Matka Tea</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[280px] mx-auto mt-[-3rem] bg-white rounded-lg' src={herbal} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Herbal Tea</h2>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 hover-underline-animation'>
                <img className='w-[310px] h-[280px] mx-auto mt-[-3rem] bg-white rounded-lg' src={Green} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Green Tea</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Cards