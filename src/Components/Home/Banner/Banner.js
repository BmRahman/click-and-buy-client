import React from 'react';
import click from '../../../Assets/animation_500_lau1zz70.gif';

const Banner = () => {
    return (
        <div>
        <div className="hero main-banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-3/4 lg:w-2/4'>
          <img src={click} className=" rounded-lg shadow-2xl lg:mx-auto" alt=''/>
          </div>
          <div className='w-full lg:w-2/4'>
            <h1 className="text-4xl lg:text-5xl font-bold capitalize">Best efforts for<br/> your dream phone</h1>
            <p className="py-6">Click & Buy is the leading reCommerce company that buys and sells pre-owned consumer electronics. We provide our customers with simple selling options by purchasing their used smartphones, tablets, and more. We then inspect, certify and sell them to consumers looking for a cost-effective way to stay connected. Click & Buy is simple, convenient, and it works for everyone.</p>
          </div>
        </div>
    </div>
        </div>
    );
};

export default Banner;