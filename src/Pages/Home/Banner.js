import React from 'react';
import slider1 from '../../assets/slider/slider1.webp';
import slider2 from '../../assets/slider/slider2.webp';
import slider3 from '../../assets/slider/slider3.webp';

const Banner = () => {
    return (
        <div  className="carousel w-full">
            <div style={{backgroundImage: `url(${slider1})`,backgroundSize:'cover', height:'553px'}} id="slide1" className="max-h-96 md:max-h-screen carousel-item relative w-full">
                <div className='flex justify-center items-center'>
                <div>
                <h5 className='text-secondary mb-4 text-xl md:text-4xl font-semibold ml-16'>50% off in all products</h5>
                <h2 className="text-secondary text-3xl md:text-7xl font-semibold ml-16">Latest & Powerful <br /> Engine For You</h2>
                <button className='btn btn-accent text-secondary ml-16 mt-10 w-44'>Explore Now &raquo;</button>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div style={{backgroundImage: `url(${slider2})`,backgroundSize:'cover', height:'553px'}} id="slide2" className="max-h-96 md:max-h-screen carousel-item relative w-full">
            <div className='flex justify-center items-center'>
                <div>
                <h5 className='text-secondary mb-4 text-xl md:text-4xl font-semibold ml-16'>Get up to 50% off Today Only!</h5>
                <h2 className="text-secondary text-3xl md:text-7xl font-semibold ml-16">Summer Sale For <br /> Auto Parts</h2>
                <button className='btn btn-accent text-secondary ml-16 mt-10 w-44'>Explore Now</button>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div style={{backgroundImage: `url(${slider3})`,backgroundSize:'cover', height:'553px'}} id="slide3" className="max-h-96 md:max-h-screen carousel-item relative w-full">
            <div className='flex justify-center items-center'>
                <div>
                <h5 className='text-secondary mb-4 text-xl md:text-4xl font-semibold ml-16'>Wide Selections of Auto Parts</h5>
                <h2 className="text-secondary text-3xl md:text-7xl font-semibold ml-16">Efective All  Tools For <br /> Your Dream Car</h2>
                <button className='btn btn-accent text-secondary ml-16 mt-10 w-44'>Explore Now</button>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;