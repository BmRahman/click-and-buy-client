import React from 'react';
import pay from '../../../Assets/animation_500_lau23x8s.gif'

const Pay = () => {
    return (
        <div className='mt-20 mb-20'>
        <div className="hero main-banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='w-3/4 lg:w-2/4'>
          <img src={pay} className=" rounded-lg shadow-2xl lg:mx-auto" alt=''/>
          </div>
          <div className='w-full lg:w-2/4'>
            <h1 className="text-4xl lg:text-5xl font-bold capitalize">Easy And Secure <br/> Payment System</h1>
            <p className="py-6 capitalize">You can purchase or sell your product from us with easy and secure payment system. We offer fully secured payment method. our Virtual Merchant Gateway manages the complex routing of sensitive customer information through the electronic check and creditcard processing networks. </p>
          </div>
        </div>
    </div>
        </div>
    );
};

export default Pay;