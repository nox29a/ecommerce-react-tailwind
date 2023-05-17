import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return ( <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex p-20 pt-60 h-full'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'> BEST PRODUCTS <br />
          <span className='font-semibold'>LOWEST PRICE</span>
          </h1>
        </div>
          <div className='w-100  h-[2px] bg-blue-500 mr-3'>
          </div>
            <div className=''>FAST DELIVERY</div>
          </div>

    </div>
  </section>
  )
};

export default Hero;
