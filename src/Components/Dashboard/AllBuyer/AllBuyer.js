import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import BuyerDelete from './BuyerDelete/BuyerDelete';

const AllBuyer = () => {
    const [deleteBuyer, setDeleteBuyer] = useState(null)

    const {data: buyers = [], refetch} =useQuery({
        queryKey: ['buyers'],
        queryFn: async() => {
            const res = await fetch(`https://click-server.vercel.app/users/Buyer`)
            const data = res.json()
            return data
        }
    })

    const handleDeleteBuyer= user => {
        fetch(`https://click-server.vercel.app/users/${user._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        refetch()
        toast.success('Buyer removed successfully')
      })
      }

      const closeDeleteModal = () => {
        setDeleteBuyer(null)
      }

    return (
        <div className='h-screen'>
            <h2 className='text-center text-3xl font-bold mt-5 mb-10'>All buyers</h2>

            <div className="overflow-x-auto mt-8">
              <table className="table table-auto w-full">
                
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {
                    buyers.map((buyer, i) => <tr key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.role}</td>
                    <td><label onClick={() => setDeleteBuyer(buyer)} htmlFor="buyer-delete" className='btn btn-xs btn-error'>Delete</label></td>
                  </tr>)
                  }
                  
                </tbody>
              </table>
              {
                deleteBuyer &&
                <BuyerDelete 
                closeDeleteModal={closeDeleteModal}
                handleDeletebuyer={handleDeleteBuyer}
                title={`Are you sure you want to remove ${deleteBuyer.name}?`}
                message={`Removing this will be permenently delete ${deleteBuyer.name} from your database`}
                modalData={deleteBuyer}
                >

                </BuyerDelete>
              }
            </div>
        </div>
    );
};

export default AllBuyer;