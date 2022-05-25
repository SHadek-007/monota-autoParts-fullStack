import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";

const Review = () => {

    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
          .then((res) => res.json())
          .then((data) => setReviewList(data));
      }, []);

  return (
    <div>
        <h2>{reviewList.length}</h2>
      {
          reviewList.map(rev => <Reviews key={rev._id} rev={rev}></Reviews>)
      }
    </div>
  );
};

export default Review;
