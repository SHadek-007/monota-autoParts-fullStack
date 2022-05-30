import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makesAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Made Admin Successfully");
        }
      });
  };
  return (
    <tr className="border">
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makesAdmin}
            className="btn btn-xs btn-success text-white"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error text-white">Remove User</button>
      </td>
    </tr>
  );
};

export default AdminRow;
