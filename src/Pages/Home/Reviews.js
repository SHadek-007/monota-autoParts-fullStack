import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="card max-w-lg mb-12 mt-8 bg-success text-success-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{review.user}</h2>
        <p>Rating: <span className="text-secondary font-semibold">{review.rating}</span></p>
        <p>“ <small>{review.description.slice(0,100)}</small> ”</p>
      </div>
    </div>
  );
};

export default Reviews;
