import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/logo/logo.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken")
  };

  const menuItems = (
    <>
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/"}>Home</Link>
      </li>
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/myProfile"}>My Profile</Link>
      </li>
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/review"}>Reviews</Link>
      </li>
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/about"}>About</Link>
      </li >
      {
        user && <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      }
      <li className='text-balck hover:text-secondary hover:font-bold hover:border border-secondary rounded-lg'>
        {user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to={"/login"}>Login</Link>}
      </li>
    </>
  );
    return (
        <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={'/'} className=""><img src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
    );
};

export default Header;