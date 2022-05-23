import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/angle-left.png';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
          <h2 className="text-3xl text-secondary font-bold text-center">Wellcome to Your Dashboard</h2>
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden ml-5 mt-5"
        >
          <img className="text-accent" src={logo} alt="" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border border-secondary rounded-xl">
          <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard'}>My Profile</Link>
          </li>
          <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard/order'}>My Orders</Link>
          </li>
          <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard/review'}>Add Review</Link>
          </li>
          {/* {admin && 
          <>
            <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard/users'}>All Users</Link>
          </li>
           <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard/addDoctor'}>Add Doctor</Link>
          </li>
          <li className="border mb-4 rounded-lg">
            <Link to={'/dashboard/manageDoctors'}>Manage Doctors</Link>
          </li>
          </>
          } */}
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;