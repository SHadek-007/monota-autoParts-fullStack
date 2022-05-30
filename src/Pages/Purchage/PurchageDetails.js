import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchageDetails = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [user] = useAuthState(auth);
  const [customError, setCustomError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  const handleChangeQuantity = (event) => {
    setCustomError("");
    const value = event.target.value;
    const mq = parseInt(productDetail.mquantity);
    const aq = parseInt(productDetail.aquantity);

    if (mq > value || aq < value) {
      setCustomError("error");
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const placeOrder = {
      orderId: productDetail._id,
      orderName: productDetail.name,
      price: productDetail.price,
      orderUser: user.email,
      orderUserName: user.displayName,
      quantity: e.target.quantity.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added Your Order");
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border px-5 lg:px-12 w-11/12 lg:w-3/4 leading-6 py-12 mx-auto my-12 rounded-xl shadow-xl">
        {Object.keys(productDetail).length === 0 && (
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        )}

        <div className="flex items-start">
          <div>
            <img src={productDetail.img} alt="" />
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <h2 className="text-3xl font-semibold">{productDetail.name}</h2>
            <p className="text-2xl font-semibold text-secondary mt-4 mb-2">
              $ {productDetail.price}
            </p>
            <p className="text-xl">
              Available Quantity: {productDetail.aquantity} Piece
            </p>
            <p className="text-xl mt-1 mb-2">
              Minimum Quantity: {productDetail.mquantity} Piece
            </p>
            <p>
              <small>{productDetail.des}</small>
            </p>
          </div>

          <div className="mt-7 mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2">
              Place Your Order
            </h2>
            <form
              onSubmit={handleOrder}
              className="grid grid-cols-1 justify-items-center"
            >
              <input
                type="text"
                disabled
                value={productDetail.name}
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              <input
                onChange={handleChangeQuantity}
                type="number"
                name="quantity"
                placeholder="Order Quantity"
                required
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              {customError && (
                <div className="alert alert-error shadow-lg mt-2 mb-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Please a Valid Quantity.</span>
                  </div>
                </div>
              )}

              <input
                type="text"
                disabled
                value={user?.displayName || ""}
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              <input
                type="text"
                disabled
                value={user?.email || ""}
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              <input
                type="number"
                name="phone"
                placeholder="Your Phone"
                required
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="mb-4 input input-bordered w-full max-w-xl"
              />
              <input
                type="submit"
                value="Place Order"
                className="btn btn-accent text-secondary w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchageDetails;
