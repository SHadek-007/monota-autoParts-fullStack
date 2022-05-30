import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [userabout, setUserabout] = useState();
  const [trogle, setTroggle] = useState("none");

  const addmore = () => {
    setTroggle("block");
  };

  useEffect(() => {
    fetch(`  http://localhost:5000/myfrofiledata/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserabout(data[0]));
  }, []);

  const about = (e) => {
    e.preventDefault();

    const email = user?.email;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phonenumber = e.target.phonenumber.value;
    const linkedin = e.target.linkedin.value;
    const about = { education, location, phonenumber, linkedin, email };
    // Upload USer All Data
    fetch(` http://localhost:5000/myprofile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(about),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile Updated Successfully");
      });

    setUserabout(about);
    setTroggle("none");
  };

  return (
    <div className=" p-5">
      <h1 className="text-xl text-center font-bold text-success">
        Welcome, <span className="text-accent">{user?.displayName} </span> To
        Your Profile,
      </h1>
      <div className="card text-left flex max-w-md border mx-auto shadow-md my-4 p-5">
        <div>
          <img
            className="rounded-full w-28 ring-2 mx-auto"
            src={
              !user?.reloadUserInfo?.photoUrl
                ? "https://i.ibb.co/DGFwPp9/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg"
                : user?.photoURL
            }
          />
        </div>
        <div>
          <h3 className="text-2xl text-center font-bold text-gray-800">
            {user?.displayName}{" "}
          </h3>
          <h3 className=" text-center font-bold text-gray-800">
            {user?.email}{" "}
          </h3>
          <h3 className=" text-center font-bold text-gray-800">
            {userabout?.education}{" "}
          </h3>
          <h3 className=" text-center font-bold text-gray-800">
            {userabout?.location}{" "}
          </h3>
          <h3 className=" text-center font-bold text-gray-800">
            {userabout?.phonenumber}{" "}
          </h3>
          <h3 className=" text-center font-bold text-gray-800">
            {userabout?.linkedin}{" "}
          </h3>
          <button
            onClick={addmore}
            className="btn btn-success border block btn-outline mt-4 w-2/4 mx-auto"
          >
            Edite Profile
          </button>
        </div>
      </div>
      <div
        className="card max-w-md border mx-auto shadow-md my-4 p-5"
        style={{ display: `${trogle}` }}
      >
        <form onSubmit={about}>
          <span className="label-text">Your Education</span>
          <input
            name="education"
            type="text"
            className="input block input-bordered my-2 font-bold  w-full  "
            required
          />
          <span className="label-text">Your Location</span>
          <input
            name="location"
            type="text"
            className="input block input-bordered my-2 font-bold  w-full  "
            required
          />
          <span className="label-text">Phone Number</span>
          <input
            name="phonenumber"
            type="text"
            className="input block input-bordered my-2 font-bold  w-full  "
            required
          />
          <span className="label-text">LinkedIn Profile</span>
          <input
            name="linkedin"
            type="text"
            className="input block input-bordered my-2 font-bold  w-full  "
            required
          />

          <button className="btn btn-success mx-auto">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
