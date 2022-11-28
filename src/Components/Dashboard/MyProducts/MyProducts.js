import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import DeleteProduct from './DeleteProduct/DeleteProduct';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/products?email=${user?.email}`

    const {data: products = [], refetch} = useQuery({
        queryKey: ['products', user?.email],
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

    const handleAdvertise = product => {
        fetch('http://localhost:5000/advertised', {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          toast.success('Product Advertised Successfully')
        })

    }

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        refetch()
        toast.success('Product removed successfully')
        })
        
    }

    const closeDeleteModal = () => {
        setDeleteProduct(null)
      }


    return (
        <div className='h-screen'>
            <h2 className='text-3xl font-bold text-center text-primary'>My Products</h2>
            
            <div className="overflow-x-auto mt-10">
              <table className="table w-full">
    
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Product Category</th>
                    <th>Posted On</th>
                    <th>Advertise</th>
                    <th>Delete</th>
                    
                  </tr>
                </thead>
                <tbody>

                {
                  products.length < 1  ? <p className='text-xl font-bold mt-5'>No Products Uploaded Yet</p> :
                    products.map((product, i) => <tr key={product._id}>
                    <th>{i+1}</th>
                    <td>{product.product}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.date}</td>         
                    <td>{
                          
                          <Link>
                            <button onClick={() => handleAdvertise(product)} className='btn btn-sm btn-primary'>Advertise</button>
                          </Link>
                      }
                      
                      </td>
                      <td><label onClick={() => setDeleteProduct(product)} htmlFor="product-delete" className='ml-3'>X</label></td>
                  </tr>)
                  }
                  
                </tbody>
              </table>
            </div>
            {
              deleteProduct &&
             <DeleteProduct
             closeDeleteModal={closeDeleteModal}
             handleDeleteProduct= {handleDeleteProduct}
             title={`Are you sure you want to remove ${deleteProduct.product}?`}
             message={`Removing this will be permenently delete ${deleteProduct.product} from your profucts list`}
             modalData={deleteProduct}
             >

             </DeleteProduct>
            }
        </div>
    );
};

export default MyProducts;