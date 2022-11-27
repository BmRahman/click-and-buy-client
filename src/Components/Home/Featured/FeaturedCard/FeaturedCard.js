import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { Navigate } from 'react-router-dom';

const FeaturedCard = ({featured, setFeaturedPhone}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const {category, date, email, image, location, prevPrice, price, product, seller, used} = featured

    return (
        <div className=''>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure className='h-60'><img src={image} alt="Shoes" className='h-60'/></figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold capitalize">{product}</h2>
                {/* first div */}
                
                <p className='text-lg'><strong>Seller Name: {seller}</strong></p>
                <p className='text-lg'><strong>Seller Location: {location}</strong></p>
                
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
                <p>Posted on: {date}</p>
                <div className="card-actions justify-end">
                <label onClick={user?.email ? () => setFeaturedPhone(featured) : <Navigate to='/login'></Navigate>} htmlFor="featured-modal" className="btn btn-primary">Book</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FeaturedCard;