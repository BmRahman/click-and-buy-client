import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('')

    const handleRegister = data => {
        console.log(data)
        
    }


    return (
        <div className='h-[600px] lg:h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7 shadow-2xl'>
        <form onSubmit={handleSubmit(handleRegister)}>
        <h2 className='text-center text-lg font-bold text-accent mb-6'>Sign Up</h2>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", {required: "*Your name is required!"})} className="input input-bordered w-full mb-3"/>
            {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
            </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", {required: "*Email Address is required!"})} className="input input-bordered w-full mb-3"/>
            {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {required: "*Please Enter A Valid Password!", minLength: {value: 6, message: "password must be 6 characters or longer"}})} className="input input-bordered w-full mb-3"/>
            {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}
            </div>
            {/* <p>Forgot Password?</p> */}
          {/* <p>{data}</p> */}
          <button className='btn btn-accent w-full mt-3 mb-3' type='submit'>Sign Up</button>
          
            {
              signupError && <p className='text-red-400'>{signupError}</p>
            }
          
    </form>
    <p className='text-xs text-center'>Already have an account? <Link to='/login' className='text-secondary'>Log in here</Link></p>
    <div className="divider mt-4 mb-4">OR</div>
    <button className='btn btn-accent btn-outline w-full mt-3 mb-3' type='submit'>Continue With Google</button>
    </div>

    </div>
    );
};

export default Register;