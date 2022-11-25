import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { AuthContext } from './../../../Contexts/AuthProvider';


const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key
    

    const handleAddProduct = data => {
      console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`

        fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgData => {
          console.log(imgData)
          if(imgData.success){
            console.log(imgData.data.url)
            const product = {
                category: data.category,
                product: data.productname,
                seller: data.name,
                image: imgData.data.url,
                location: data.location,
                prevPrice: data.marketprice,
                price: data.sellingprice,
                used: data.used,
                email: data.email
            }

            // posting product
            fetch('http://localhost:5000/products', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result => {
              console.log(result)
              toast.success('product added successfully')
            })
          }
        })
    }

    return (
        <div className='w-9/12 mx-auto p-7'>
           <h2 className='text-3xl font-bold capitalize text-primary'>add a product</h2>

           <form onSubmit={handleSubmit(handleAddProduct)} >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* seller name */}
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} {...register("name", {required: "*your name is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                </div>

            {/* product name */}
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" {...register("productname", {required: "*Product name is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.productname && <p role="alert" className='text-red-400'>{errors.productname?.message}</p>}
                </div>

                {/* seller location */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input type="text" {...register("location", {required: "*your location is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.location?.message}</p>}
                </div>

                {/* product buying price */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Market Price</span>
                </label>
                <input type="text" {...register("marketprice")} className="input input-bordered w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                </div>

                {/* selling price */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">My Price</span>
                </label>
                <input type="text" {...register("sellingprice", {required: "*your selling price is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                </div>

                {/* years used */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Years Used</span>
                </label>
                <input type="text" {...register("used", {required: "*your used time is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.used && <p role="alert" className='text-red-400'>{errors.used?.message}</p>}
                </div>

                {/* seller email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" defaultValue={user?.email} {...register("email", {required: "*Email Address is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" {...register("phone", {required: "*Phone number is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.phone && <p role="alert" className='text-red-400'>{errors.phone?.message}</p>}
                </div>

                {/* product category */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select {...register('category')} 
                className="select select-bordered w-full mb-3">
                <option disabled selected>Select Product Catgory</option>
                <option>apple</option>
                <option>samsung</option>
                <option>xiaomi</option>
                <option>oneplus</option>                
                </select>
                </div>

                {/* product photo */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text lg:ml-28 mb-2">Product Photo</span>
                </label>
                <input type="file" {...register("image", {required: "*Product image is required!"})} className="input w-full lg:w-3/5 mx-auto mb-3"/>
                {errors.image && <p role="alert" className='text-red-400'>{errors.image?.message}</p>}
                </div> <br/>
                {/* <p>Forgot Password?</p> */}
              {/* <p>{data}</p> */}
            </div>
            <div className='w-full lg:w-2/5 mx-auto'>
            <button className='btn btn-accent w-full  mt-3 mb-3' type='submit'>Add Product</button>
            </div>
            </form>
             
        </div>
    );
};

export default AddProduct;