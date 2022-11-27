import React from 'react';
import apple from '../../../Assets/apple.png';
import samsung from '../../../Assets/samsung.jpg';
import xiaomi from '../../../Assets/Xiaomi_logo.svg.png';
import oneplus from '../../../Assets/oneplus.png';
import { Link } from 'react-router-dom';




const Categories = () => {
    return (
        <div className='mt-10 mb-10'>
          <h2 className='text-center text-3xl text-accent font-bold capitalize mt-10 mb-10'>all <span className='text-primary'>categories</span></h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                {/* card 1 */}
                <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure className='h-60'><img src={apple} alt="apple" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Apple</h2>
                    <div className="card-actions justify-end">
                      <Link to='/apple'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 2 */}
                <div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure className='h-60'><img src={samsung} alt="samsung" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Samsung</h2>
                    <div className="card-actions justify-end">
                      <Link to='/samsung'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 3 */}
                <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure className='h-60'><img src={xiaomi} alt="xiaomi" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Xiaomi</h2>
                    <div className="card-actions justify-end">
                      <Link to='/xiaomi'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 4 */}
                <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure className='h-60'><img src={oneplus} alt="oneplus"/></figure>
                  <div className="card-body">
                    <h2 className="card-title">Oneplus</h2>
                    <div className="card-actions justify-end">
                      <Link to='/oneplus'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;