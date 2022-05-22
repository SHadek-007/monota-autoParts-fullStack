import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-16 mb-8">Recent Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                parts.map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts}></SingleParts>)
            }
        </div>
        </div>
    );
};

export default Parts;