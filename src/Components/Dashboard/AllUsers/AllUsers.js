import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import UserDelete from './UserDelete/UserDelete';
import { TiTick } from 'react-icons/ti';

const AllUsers = () => {
  const [deleteUser, setDeleteUser] = useState(null)

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://click-server.vercel.app/users')
            const data = res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://click-server.vercel.app/users/admin/${id}`, {
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

      const handleVerify = id => {
        fetch(`https://click-server.vercel.app/users/verified/${id}`, {
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


      const handleDeleteUser = user => {
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
        toast.success('User removed successfully')
      })
      }
  
      const closeDeleteModal = () => {
        setDeleteUser(null)
      }


    return (
        <div className='h-screen'>
            <h2 className='text-center text-3xl font-bold mt-5 mb-10'>All Users</h2>

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
                    users.map((user, i) => <tr key={user._id}>
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user?.role === 'Seller' && user?.verified !== 'yes' &&
                     <button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-secondary'>Verify</button>}
                    {
                      user?.role === 'Seller' && user?.verified === 'yes' && 
                      <button className='btn btn-xs btn-outline text-blue-600'>Verified <TiTick className='text-blue-600'></TiTick></button>
                    }
                    </td>
                    <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                    <td><label onClick={() => setDeleteUser(user)} htmlFor="user-delete" className='btn btn-xs btn-error'>Delete</label></td>
                  </tr>)
                  }
                  
                </tbody>
              </table>
              {
                deleteUser &&
                <UserDelete 
                closeDeleteModal={closeDeleteModal}
                handleDeleteUser={handleDeleteUser}
                title={`Are you sure you want to remove ${deleteUser.name}?`}
                message={`Removing this will be permenently delete ${deleteUser.name} from your database`}
                modalData={deleteUser}
                >

                </UserDelete>
              }
            </div>
        </div>
    );
};

export default AllUsers;