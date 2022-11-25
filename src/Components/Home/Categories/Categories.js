import React from 'react';

const Categories = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                {/* card 1 */}
                <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 2 */}
                <div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 3 */}
                <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
                {/* card 4 */}
                <div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;