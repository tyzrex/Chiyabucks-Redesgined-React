import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-green-500'>
<div className='max-w-[1500px] bg-green-500 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-white'>CHIYA<span className='text-yellow-400'>BUCKS</span></h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-yellow-300'>Order</h6>
        <ul>
            <li className='py-2 text-sm'>Delivery</li>
            <li className='py-2 text-sm'>Pickup</li>
            <li className='py-2 text-sm'>Stations</li>
            <li className='py-2 text-sm'>Web Order</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-yellow-300'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Recipes</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Training</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-yellow-300'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-yellow-300'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;