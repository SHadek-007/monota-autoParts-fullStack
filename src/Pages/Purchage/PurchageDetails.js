import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchageDetails = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [inputQuantity, setInputQuantity] = useState(0);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [productDetail]);

  const increaseProduct = () =>{
    const url = `http://localhost:5000/product/increase/${productDetail._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mquantity: inputQuantity }),
    })
      .then((res) => res.json())
      .then((data) =>
        setProductDetail({
          ...productDetail,
          mquantity: productDetail.mquantity + parseInt(inputQuantity),
        })
      );
  };


  const decreaseProduct = () =>{
    const url = `http://localhost:5000/product/decrease/${productDetail._id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
            setProductDetail({
                ...productDetail,
                mquantity: productDetail.mquantity - 1,
              });
      });
  }

  const handleOrder = (e) =>{
    e.preventDefault();
    const placeOrder = {
      orderId: productDetail._id,
      orderName: productDetail.name,
      price:productDetail.price,
      orderUser: user.email,
      orderUserName: user.displayName,
      quantity:e.target.quantity.value,
      phone: e.target.phone.value,
      address:e.target.address.value
    }
    fetch('http://localhost:5000/order',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(placeOrder)
    })
    .then(res => res.json())
    .then(data =>{
      toast('Successfully Added Your Order')
    })
  }

  return (

    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border px-5 lg:px-12 w-11/12 lg:w-3/4 leading-6 py-12 mx-auto my-12 rounded-xl shadow-xl">
        { (Object.keys(productDetail).length  === 0) && 
      <div className="flex items-center justify-center ">
      <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
   </div>
      }
        
        <div className="flex items-start">
            <div>
                <img src={productDetail.img} alt="" />
            </div>
        </div>
        <div className="col-span-2">
            <div>
                <h2 className="text-3xl font-semibold">{productDetail.name}</h2>
                <p className="text-2xl font-semibold text-secondary mt-4 mb-2">$ {productDetail.price}</p>
                <p className="text-xl">Available Quantity: {productDetail.aquantity} Piece</p>
                <p className="text-xl mt-1 mb-2">Minimum Quantity: {productDetail.mquantity} Piece</p>
                <p><small>{productDetail.des}</small></p>
            </div>
            <div className="mt-5">
                <p className="text-lg mb-1">Qty</p>
                <button onClick={decreaseProduct} className="border py-2 px-4 bg-base-200 hover:bg-base-300">-</button>
                <input onBlur={(e) => {setInputQuantity(e.target.value);}} type="number" name= "" className="border w-20 pl-3 py-2 outline-0"  />
                <button onClick={() => increaseProduct()} className="border py-2 px-4 bg-base-200 hover:bg-base-300">+</button>
            </div>
            <div className="mt-7 mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2">Place Your Order</h2>
            <form onSubmit={handleOrder} className="grid grid-cols-1 justify-items-center">
            <input type="text" disabled value={productDetail.name} className="mb-4 input input-bordered w-full max-w-xl" />
            <input type="number" name="quantity" placeholder="Order Quantity" className="mb-4 input input-bordered w-full max-w-xl" />
            <input type="text" disabled value={user?.displayName || ""} className="mb-4 input input-bordered w-full max-w-xl" />
            <input type="text" disabled value={user?.email || ""} className="mb-4 input input-bordered w-full max-w-xl" />
            <input type="number" name="phone" placeholder="Your Phone" className="mb-4 input input-bordered w-full max-w-xl" />
            <input type="text" name="address" placeholder="Your Address" className="mb-4 input input-bordered w-full max-w-xl" />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full max-w-xs"
            />
            </form>
        </div>
        </div>
    </div>
    </div>
  );
};

export default PurchageDetails;
