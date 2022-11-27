import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import DeleteOrder from './DeleteOrder/DeleteOrder';
import { toast } from 'react-hot-toast';

const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    // http://localhost:5000/bookings?email=tom@gmail.com

    const {data: bookings = [], refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleDeleteOrder = booking => {
        fetch(`http://localhost:5000/bookings/${booking._id}`, {
            method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        refetch()
        toast.success('Order removed successfully')
        })
        
    }

    const closeDeleteModal = () => {
        setDeleteOrder(null)
      }

    return (
        <div className='h-screen'>
            <h2 className='text-3xl font-bold text-center text-primary'>MyOrders</h2>

            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
    
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Payment</th>
                    <th>Delete</th>
                    
                  </tr>
                </thead>
                <tbody>

                {
                  bookings.length < 1  ? <p className='text-xl font-bold mt-5'>No Appointments Taken Yet</p> :
                    bookings.map((booking, i) => <tr key={booking._id}>
                    <th>{i+1}</th>
                    <td>{booking.product}</td>
                    <td>{booking.price}</td>
                    <td>{booking.location}</td>         
                    <td>{
                          booking.price && !booking.paid &&
                          <Link to={`/myAppointment/payment/${booking._id}`}>
                            <button className='btn btn-sm btn-primary'>Pay Now</button>
                          </Link>
                      }
                      {
                          booking.price && booking.paid && <p className='text-primary text-xl'>Paid</p>
                      }
                      </td>
                    <td><label onClick={() => setDeleteOrder(booking)} htmlFor="order-delete" className='ml-3'>X</label></td>
                  </tr>)
                  }
                  
                </tbody>
              </table>
            </div>
            {
               deleteOrder &&
               <DeleteOrder 
               handleDeleteOrder={handleDeleteOrder}
               closeDeleteModal={closeDeleteModal}
               title={`Are you sure you want to remove ${deleteOrder.product}?`}
               message={`Removing this will be permenently delete ${deleteOrder.product} from your order list`}
               modalData={deleteOrder}
               ></DeleteOrder> 
            }
        </div>
    );
};

export default MyOrders;