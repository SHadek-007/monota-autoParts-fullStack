import React from 'react';
import image from '../../assets/at_auto.webp';

const OurBenifits = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12 shadow-lg rounded-lg'>
            <div className=''>
                <img className='max-h-sm lg:h-96 rounded-lg' src={image} alt="" />
            </div>
            <div className='px-3 md:px-0 lg:px-0'>
                <h2 className='md:text-3xl lg:text-5xl font-bold'>Looking For Automotive Professional?</h2>
                <p className='md:text-md lg:text-xl font-semibold mt-3'>Join our FREE membership program for industry professionals <br /> - receive these exclusive benefits:</p>
                <p className='mt-2'>With over 250+ branches nationwide and 130,000 parts available Euro Car Parts is the UK's number 1 supplier of Car Parts! We offer service parts at very competitive prices with Free Delivery across the whole of the UK.</p>
                <div className='py-2 lg:py-0 '>
                <div className='flex items-center mt-2'>
                    <input type="checkbox" checked="checked" className="checkbox" readOnly/>
                    <p className='ml-3'><small>Additional 10% off our already low prices</small></p>
                </div>
                <div className='flex items-center mt-1'>
                    <input type="checkbox" checked="checked" className="checkbox" readOnly/>
                    <p className='ml-3'><small>Flat $25 next day air shipping & Professional customer service</small></p>
                </div>
                <div className='flex items-center mt-1'>
                    <input type="checkbox" checked="checked" className="checkbox" readOnly/>
                    <p className='ml-3'><small>Delivery of goods all over the world</small></p>
                </div>
                <button className="btn btn-sm btn-primary mt-3">Apply Now &raquo;</button>
            </div>
                </div>
        </div>
    );
};

export default OurBenifits;