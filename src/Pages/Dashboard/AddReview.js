import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleReview = (e) => {
    e.preventDefault();
    const review = { rating, description, user: user.displayName };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added Your Review");
        e.target.reset();
      });
  };

  return (
    <div className="mt-5 ">
      <form
        onSubmit={handleReview}
        className="grid grid-cols-1 justify-items-center gap-5 border border-secondary max-w-lg mx-auto rounded-xl p-10"
      >
        <input
          type="text"
          disabled
          value={user?.displayName}
          className="border py-2 pl-4 rounded-lg outline-0 w-full max-w-md"
          name=""
        />
        <input
          onBlur={handleRating}
          type="number"
          name="rating"
          className="border py-2 pl-4 rounded-lg outline-0 w-full max-w-md"
          placeholder="Your Rating Now "
        />
        <textarea
          onBlur={handleDescription}
          type="text"
          name=" description"
          className="border py-2 pl-4 rounded-lg outline-0 w-full max-w-md"
          placeholder=" Your Comment Here"
        />
        <input className="btn btn-secondary" type="submit" value="Comment" />
      </form>
    </div>
  );
};

export default AddReview;
