import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const FeaturedModal = ({featuredPhone, setFeaturedPhone, refetch}) => {
    const {user} = useContext(AuthContext)
    const {category, date, email, image, location, prevPrice, price, product, seller, used} = featuredPhone


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const product = form.product.value;
        const price = form.price.value;
        const client = form.client.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
    
        const booking ={
          product, price, client, email, phone, location
        }
        console.log(booking)
    
        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            setFeaturedPhone(null)
            toast.success('Booking Confirmed')
            refetch()
        }
        })
      }


    return (
        <div>
             <div> 
            <input type="checkbox" id="featured-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
              <label htmlFor="featured-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg text-center font-bold">Place Your Booking here</h3>
                <form onSubmit={handleBooking} className='w-3/5 mx-auto mt-6'>
                {/* product */}
                <label>Product Name</label>
                <input type="text" name='product' value={product} disabled className="input input-bordered w-full max-w-xs mb-3 mt-3" /> <br/>
                {/* price */}
                <label>Price</label>
                <input type="text" name='price' value={`$${price}`} disabled className="input input-bordered w-full max-w-xs mb-3 mt-3" /> <br/>
                {/* client name */}
                <label>Your Name</label>
                <input type="text" name='client' placeholder="Full Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full max-w-xs mb-3 mt-3" /> <br/>
                {/* client email */}
                <label>Email</label>
                <input type="email" name='email' placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs mb-3 mt-3" required/> <br/>
                {/* phone */}
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-3 mt-3" required/> <br/>
                {/* meeting location */}
                <label>Meeting Location</label>
                <input type="text" name='location' placeholder="location" className="input input-bordered w-full max-w-xs mb-3 mt-3" required/> <br/>
                <div className='text-center'>
                    <button className='btn btn-primary mt-3'>Book</button>
                </div>
                </form>
              </div>
            </div>
        </div>
        </div>
    );
};

export default FeaturedModal;