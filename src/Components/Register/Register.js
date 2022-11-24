import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('')
    const {createUser, googleLogin, updateUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleGoogle = () => {
        googleLogin()
        .then(() => {})
        .catch(err => console.error(err))
    }

    const handleRegister = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user)
            const userInfo = {
              displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
              saveUser(data.name, data.email, data.role)
              toast.success('user created successfully')
              
            })
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }

    const saveUser = (name, email, role) => {
      const user = {name, email, role}
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        getUserToken(email)
      })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/')
            }
        })
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
            <div className="form-control w-full">
            <select {...register('role')}  className="select mt-3 select-bordered w-full max-w-xs">
            <option disabled selected>Who are you?</option>
            <option>Buyer</option>
            <option>Seller</option>
            </select>
            </div>
            {/* <p>Forgot Password?</p> */}
          {/* <p>{data}</p> */}
          <button className='btn btn-secondary w-full mt-3 mb-3' type='submit'>Sign Up</button>
          
            {
              signupError && <p className='text-red-400'>{signupError}</p>
            }
          
    </form>
    <p className='text-xs text-center'>Already have an account? <Link to='/login' className='text-secondary'>Log in here</Link></p>
    <div className="divider mt-4 mb-4">OR</div>
    <button onClick={handleGoogle} className='btn btn-accent btn-outline w-full mt-3 mb-3' type='submit'>Continue With Google</button>
    </div>

    </div>
    );
};

export default Register;