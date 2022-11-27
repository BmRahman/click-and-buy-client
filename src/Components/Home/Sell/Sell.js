import React from 'react';

const Sell = () => {
    return (
        <div className='mb-12'>
            <h2 className='text-3xl text-center font-bold mt-10 mb-10'>Sell Your Gadget in <span className='text-primary'>3 Steps</span></h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {/* card 1 */}
            <div className="card shadow-2xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-center">Check Price!</h2>
                  <p className='text-center'>Select your device & tell us about its current <br/> condition, and our advanced AI tech will tailor <br/> make the perfect price for you.</p>
                </div>
            </div>
            {/* card 2 */}
            <div className="card shadow-2xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-center">Schedule Pickup</h2>
                  <p className='text-center'>Book a free pickup from your home or work at <br/> a time slot as per your convenience</p>
                </div>
            </div>
            {/* card 3 */}
            <div className="card shadow-2xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-center">Get paid instantly</h2>
                  <p className='text-center'>Did we mention you get paid as soon as our <br/> executive picks up your device? It’s instant & <br/> secure payment all the way!</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sell;