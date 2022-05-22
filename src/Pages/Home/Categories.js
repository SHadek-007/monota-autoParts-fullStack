import React from 'react';
import img1 from '../../assets/category/1DOE_Replica_Wheels.webp';
import img2 from '../../assets/category/2Brake_Disc.webp';
import img3 from '../../assets/category/3Steel_Rim.webp';
import img4 from '../../assets/category/4Steam_Engine_Model.webp';
import img5 from '../../assets/category/5Piston_Rod_Clevis.webp';
import img6 from '../../assets/category/6Engine_Piston.webp';

const Categories = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-5xl text-center hover:text-secondary font-semibold'>Top Categories</h2>
            <p className='text-center text-xl mt-5 mb-9'>Get your car looking like new with our vast selection of Auto Parts and Car Accessories.</p>
            <div className='grid grid-cols-2 lg:grid-cols-6 mx-auto'>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img1} alt="" />
                    <p>Replica Wheels</p>
                </div>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img2} alt="" />
                    <p>Break Disk</p>
                </div>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img3} alt="" />
                    <p>Steel Rim</p>
                </div>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img4} alt="" />
                    <p>Steam Engine</p>
                </div>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img5} alt="" />
                    <p>Piston Rod</p>
                </div>
                <div className='mx-auto text-center shadow-lg p-2 rounded-xl'>
                    <img src={img6} alt="" />
                    <p>Engine Piston</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;