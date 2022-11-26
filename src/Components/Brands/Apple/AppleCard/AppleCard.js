import React from 'react';

const AppleCard = (apple) => {
    console.log(apple)
    const {category, email, image, location, prevPrice, price, product, seller, used} = apple.apple
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className='h-60'><img src={image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold capitalize">{product}</h2>
                {/* first div */}
                <div className='flex justify-between text-lg'>
                <p><strong>Seller Name: {seller}</strong></p>
                <p><strong>Seller Location: {location}</strong></p>
                </div>
                {/* price div */}
                <div className='flex justify-between text-lg'>
                <p><strong>Buying Price: ${prevPrice}</strong></p>
                <p><strong>Selling Price: ${price}</strong></p>
                </div>
                {/* second div */}
                <div className='flex justify-between text-lg'>
                <p><strong>Category: {category}</strong></p>
                <p><strong>Years Used: {used}</strong></p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default AppleCard;