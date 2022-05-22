import React from "react";
import errImg from "../../assets/404.jpg";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-5 lg:px-12">
          <div className="flex justify-center items-center">
            <div>
            <small className="font-bold text-accent">ERROR 404</small>
            <h2 className="text-4xl md:text-5xl font-bold">
              Oops! The page you're looking for isn't here.
            </h2>
            <p className="text-3xl mt-3">
              You might have the wrong address, or the page may have moved.
            </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={errImg} alt="" />
          </div>
        </div>
  );
};

export default NotFound;
