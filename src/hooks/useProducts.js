import { useEffect, useState } from 'react';

const useProducts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch("https://infinite-journey-21489.herokuapp.com/product")
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return [parts, setParts];
};

export default useProducts;