import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useAdmin from './../../../Hooks/useAdmin';
import useSeller from './../../../Hooks/useSeller';
import useBuyer from './../../../Hooks/useBuyer';


const Header = () => {
  const {user, logoutUser} = useContext(AuthContext) 
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)

  console.log(user)
    const handleSignOut = () => {
      logoutUser()
      .then(() => {})
      .catch(err => console.error(err))
    }


    const menuItems = 
                      <>
                      <li><Link to='/' className='text-lg hover:text-primary'>Home</Link></li>
                      {
                        user?.email &&
                        <>
                        <li>
                        <Link>
                          <p className='text-lg hover:text-primary'>Categories</p>
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                        <ul className="p-2 z-10 bg-accent">
                        <li className='text-primary'><Link to='/apple'>Apple</Link></li>
                        <li className='text-primary'><Link to='/samsung'>Samsung</Link></li>
                        <li className='text-primary'><Link to='/xiaomi'>Xiaomi</Link></li>
                        <li className='text-primary'><Link to='/oneplus'>Oneplus</Link></li>
                        </ul>
                      </li>
                        </>
                      
                      }
                      <li><Link to='/blog' className='text-lg hover:text-primary'>Blog</Link></li>
                      {
                        user?.email || user?.uid ? 

                        <>
                          <li>
                            <Link>
                              <p className='text-lg hover:text-primary'>Dashboard</p>
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </Link>
                            <ul className="p-2 z-10 bg-accent">
                              {
                                isAdmin &&
                                <>
                                <li className='text-primary'><Link to='/allsellers'>All Seller</Link></li>
                                <li className='text-primary'><Link to='/allbuyers'>All Buyer</Link></li>
                                </>
                              }
                              {
                                isSeller && 
                                <>
                              <li className='text-primary'><Link to='/addproduct'>Add a Product</Link></li>
                              <li className='text-primary'><Link to='/myproducts'>My Products</Link></li>
                                </>
                              }
                              {
                                isBuyer &&
                                <li className='text-primary'><Link to='/myorders'>My Orders</Link></li>
                              }
                                

                            </ul>
                          </li>
                        <li><button onClick={handleSignOut} className='btn btn-outline btn-primary rounded-xl'>Log Out</button></li>
                        </>
                       
                       :
                       <>
                       <li><Link to='/login' className='text-lg hover:text-primary'>Login</Link></li>
                       <li><Link to='/register' className='text-lg hover:text-primary'>Sign Up</Link></li>
                       </>
                      }
                      </>

                      

    return (
        <div>
            <div className="navbar bg-base-100">

            <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        menuItems
                    }
                  </ul>
                </div>
                
              <div className="flex-1">
                <Link to='/' className='font-bold text-lg'>Click & <span className='text-primary'>Buy</span></Link>
              </div>
             
                
                
              <div className="hidden lg:flex none">
                <ul className="menu menu-horizontal p-0">
                  {
                    menuItems
                  }
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Header;