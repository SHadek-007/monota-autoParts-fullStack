import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold text-accent'>Welcome To Your Profile</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div>
            <div className='card mx-auto shadow-md my-4 p-5'>
             <img className='rounded-full w-28 ring-2 mx-auto' src="https://lh3.googleusercontent.com/a-/AOh14GixaNUdpYA0MfkB6Rs9lIc5L_Br1ANmgBDTzQ-s=s96-c" alt="" />
             {/* <img className='rounded-full w-28 ring-2 mx-auto' src={user?.reloadUserInfo?.photoUrl} alt="" /> */}
               <h3 className='text-2xl text-center font-bold text-gray-800'>{user?.displayName} </h3>
             <h3 className='text-xl text-center font-bold text-gray-800'>{user?.email} </h3>
            </div>
            <div></div>
        </div>
        </div>
    </div>
        
    );
};

export default MyProfile;