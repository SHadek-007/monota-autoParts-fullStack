import React from "react";

const SingleParts = ({singleParts}) => {
    const {name, img, price, mquantity, aquantity, des} = singleParts;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Car Parts"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Minimum Quantity: {mquantity}</p>
          <p>Available Quantity: {aquantity}</p>
          <p><small>{des}</small></p>
          <h4 className="text-2xl font-bold text-secondary">{price}</h4>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Purchage Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
