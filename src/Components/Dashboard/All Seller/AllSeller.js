import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import DeleteSeller from './DeleteSeller/DeleteSeller';


const AllSeller = () => {
  const [deleteSeller, setDeleteSeller] = useState(null)


    const {data: sellers = [], refetch} =useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/users/Seller`)
            const data = res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            toast.success('admin added succesfully')
            refetch()
          }
        })
      }

      const handleDeleteSeller= user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        refetch()
        toast.success('Seller removed successfully')
      })
      }

      const handleVerify = id => {
        fetch(`http://localhost:5000/users/verified/${id}`, {
          method: 'PUT',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            toast.success('User verified succesfully')
            refetch()
          }
        })
      }

      const closeDeleteModal = () => {
        setDeleteSeller(null)
      }

    return (
        <div className='h-screen'>
            <h2 className='text-center text-3xl font-bold mt-5 mb-10'>All Sellers</h2>

            <div className="overflow-x-auto mt-8">
              <table className="table table-auto w-full">
                
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Verify</th>
                    <th>Admin</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {
                    sellers.map((seller, i) => <tr key={seller._id}>
                    <th>{i+1}</th>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>{seller.role}</td>
                    <td>{seller?.role === 'Seller' && seller?.verified !== 'yes' &&
                     <button className='btn btn-xs btn-secondary'>Verify</button>}
                    {
                      seller?.role === 'Seller' && seller?.verified === 'yes' && 
                      <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-outline text-blue-600'>Verified <TiTick className='text-blue-600'></TiTick></button>
                    }
                    </td>
                    <td>{seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                    <td><label onClick={() => setDeleteSeller(seller)} htmlFor="seller-delete" className='btn btn-xs btn-error'>Delete</label></td>
                  </tr>)
                  }
                  
                </tbody>
              </table>
              {
                deleteSeller &&
                <DeleteSeller 
                closeDeleteModal={closeDeleteModal}
                handleDeleteseller={handleDeleteSeller}
                title={`Are you sure you want to remove ${deleteSeller.name}?`}
                message={`Removing this will be permenently delete ${deleteSeller.name} from your database`}
                modalData={deleteSeller}
                >

                </DeleteSeller>
              }
            </div>
        </div>
    );
};

export default AllSeller;