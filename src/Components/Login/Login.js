import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../../Contexts/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {loginUser, googleLogin} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')

    let location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
        .then(res => {
          const user = res.user;
          console.log(user)
          navigate(from, { replace: true })
        })
        .catch(error => {
          console.error(error.message)
          setLoginError(error.message)
        })
    }

    const handleGoogle = () => {
        googleLogin()
        .then(() => {})
        .catch(err => console.error(err))
    }

    return (
        <div className='h-[600px] lg:h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
            <form onSubmit={handleSubmit(handleLogin)}>
            <h2 className='text-center text-lg font-bold text-accent mb-6'>Login</h2>
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
                <p>Forgot Password?</p>
              {/* <p>{data}</p> */}
              <button className='btn btn-accent w-full mt-3 mb-3' type='submit'>Login</button>
              {
                loginError && <p className='text-red-400 mb-3'>{'*wrong password! please try again with valid password'}</p>
              }
        </form>
        <p className='text-xs text-center'>New to Doctor's Portal? <Link to='/register' className='text-secondary'>Create New Account</Link></p>
        <div className="divider mt-4 mb-4">OR</div>
        <button onClick={handleGoogle} className='btn btn-accent btn-outline w-full mt-3 mb-3' type='submit'>Continue With Google</button>
        </div>

        </div>
    );
};

export default Login;