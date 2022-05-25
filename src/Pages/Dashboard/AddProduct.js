import { useState } from "react";
import { toast } from "react-toastify";


const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [aquantity, setAquantity] = useState(0);
    const [mquantity, setMquantity] = useState(0);
    const [des, setDes] = useState('');
    const [img, setImg] = useState('');

    const handleName = (e) =>{
        setName(e.target.value);
    };
    const handlePrice = (e) =>{
        setPrice(e.target.value);
    };
    const handleAQuantity = (e) =>{
        setAquantity(e.target.value);
    };
    const handleMQuantity = (e) =>{
        setMquantity(e.target.value);
    };
    const handleImg = (e) =>{
        setImg(e.target.value);
    };
    const handleDes = (e) =>{
        setDes(e.target.value);
    };

    const handleAddProduct = (e) =>{
        e.preventDefault();
        const product = {name, price, aquantity, mquantity, img, des};
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
             toast.success("Add Product Successfully");
            });
    }
    
    return (
        <div className='mt-5 '>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 justify-items-center gap-5 border border-secondary max-w-lg mx-auto rounded-xl p-10">
            <input onBlur={handleName} type="text" name="name" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder='Product Name ' />
            <input onBlur={handlePrice} type="number" name="price" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder='Price ' />
            <input onBlur={handleAQuantity} type="number" name="aquantity" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder="Available Quantity 1000"/>
            <input onBlur={handleMQuantity} type="number" name="mquantity" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder='Minimum Quantity 300' />
            <input onBlur={handleImg} type="text" name=" img" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder=' img URL' />
            <textarea onBlur={handleDes} type="text" name=" des" className='border py-2 pl-4 rounded-lg outline-0 w-full max-w-md' placeholder=' des' />
            <input className='btn btn-secondary' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;