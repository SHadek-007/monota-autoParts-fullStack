import React from "react";
import { useQuery } from "react-query";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="ml-5">
      <h2>All Admin: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></AdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
