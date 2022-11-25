import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();



    return (
        <div className='w-9/12 mx-auto p-7'>
           <h2 className='text-3xl font-bold capitalize text-primary'>add a product</h2>

           <form className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* seller name */}
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input type="text" {...register("name", {required: "*your name is required!"})} className="input input-bordered w-full mb-3"/>
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
                <input type="text" {...register("market-price")} className="input input-bordered w-full mb-3"/>
                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                </div>

                {/* selling price */}
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">My Price</span>
                </label>
                <input type="text" {...register("selling-price", {required: "*your selling price is required!"})} className="input input-bordered w-full mb-3"/>
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
                <input type="email" {...register("email", {required: "*Email Address is required!"})} className="input input-bordered w-full mb-3"/>
                {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
                </div>
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
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text lg:ml-28 mb-2">Product Photo</span>
                </label>
                <input type="file" {...register("image", {required: "*Product image is required!"})} className="input w-full lg:w-3/5 mx-auto mb-3"/>
                {errors.image && <p role="alert" className='text-red-400'>{errors.image?.message}</p>}
                </div> <br/>
                {/* <p>Forgot Password?</p> */}
              {/* <p>{data}</p> */}
              <button className='btn btn-accent mx-auto w-full lg:w-3/5 mt-3 mb-3' type='submit'>Add Product</button>   
            </form>
        </div>
    );
};

export default AddProduct;