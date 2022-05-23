import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleParts = ({singleParts}) => {
    const {_id, name, img, price, mquantity, aquantity, des} = singleParts;
    const navigate = useNavigate();
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img className="w-52 md:w-96 lg:w-52"
            src={img}
            alt="Car Parts"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Minimum Quantity: {mquantity}</p>
          <p>Available Quantity: {aquantity}</p>
          <p><small>{des.slice(0,80)}</small></p>
          <h4 className="text-2xl font-bold text-secondary">$ {price}</h4>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>navigate(`/purchage/${_id}`)}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
