import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext)

    const handleSignOut = () => {
      logoutUser()
      .then(() => {})
      .catch(err => console.error(err))
    }


    const menuItems = 
                      <>
                      <li><Link to='/' className='text-lg hover:text-primary'>Home</Link></li>
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
                              <li className='text-primary'><Link to='/allUsers'>All Users</Link></li>
                              <li className='text-primary'><Link>Submenu 2</Link></li>
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
                <Link to='/' className='font-bold text-lg'>Click & Buy</Link>
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