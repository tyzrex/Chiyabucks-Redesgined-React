import React, { useState, Component } from 'react';
import { RiMenu4Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='bg-green-600'>
            <div className='text-white max-w-[1500px] bg-green-600 flex justify-between items-center mx-auto px-4 h-24 mt-[-20px]'>
                <h3 className='font-bold  text-2xl w-full text-white-600'>Chiya<span className='text-yellow-500 text-bold'>Bucks</span></h3>
                <div className=''>
                    <ul className='hidden md:flex cursor-pointer font-bold'>
                        <li className='p-4 mx-2 hover-underline-animation'>Home</li>
                        <li className='p-4 mx-2 hover-underline-animation'>About</li>
                        <li className='p-4 mx-2 hover-underline-animation'>Menu</li>
                        <li className='p-4 mx-2 hover-underline-animation'>Feedback</li>
                        <li className='p-4 mx-2 hover-underline-animation'>Contact</li>
                        <li className='p-4 mx-2 hover-underline-animation'>
                            <div class="flex items-center justify-center w-full">

                                <label
                                    for="toogleA"
                                    className="flex items-center cursor-pointer"
                                >
                                    <div className="relative">
                                        <input id="toogleA" type="checkbox" className="sr-only" />
                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                    </div>
                                </label>

                            </div>

                        </li>
                    </ul>
                    <div onClick={handleNav} className='block md:hidden'>
                        {!nav ? <AiOutlineClose size={28} /> : <RiMenu4Line size={28} />}
                    </div>
                    <div className={!nav ? 'fixed top-0 left-0 w-[80%] border-r border-r-gray-900 h-full bg-green-500 text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                        <h1 className='w-full text-3xl font-bold text-white m-8'>Chiya<span className='text-yellow-500 text-bold'>Bucks</span></h1>
                        <ul className='uppercase p-4 text-white'>
                            <li className='p-4 border-b border-white'>Home</li>
                            <li className='p-4 border-b border-white'>About Us</li>
                            <li className='p-4 border-b border-white'>Menu</li>
                            <li className='p-4 border-b border-white'>Feedback</li>
                            <li className='p-4'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
