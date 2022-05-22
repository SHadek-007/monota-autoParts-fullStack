import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl md:text-5xl text-center font-semibold mt-16 mb-5 hover:text-secondary">Recent Products</h2>
            <p className='text-center text-xl mb-9'>We have provide all new car accessories and auto parts for your car in our store.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                parts.map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts}></SingleParts>)
            }
        </div>
        </div>
    );
};

export default Parts;