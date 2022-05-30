import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ManageAllOrders = () => {
  const [user] = useAuthState(auth);

  const [deletingOrder, setDeletingOrder] = useState(false);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/all-order`)
      .then((res) => res.json())
      .then((data) => data)
  );

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Order is Deleted Successfully.`);
          setDeletingOrder(false);
          refetch();
        }
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="ml-5 text-xl text-accent mb-6">
        All Orders: {orders.length}
      </h2>
      <div className="overflow-x-auto ml-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>QN</th>
              <th>Name</th>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="border">
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.orderUserName}</td>
                <td>{order.orderUser}</td>
                <td>{order.orderName}</td>
                <td>$ {order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <button className="btn btn-xs btn-primary">Unpaid</button>
                  )}
                  {order.price && !order.paid && (
                    <>
                      <label
                        onClick={() => setDeletingOrder(order)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error ml-5"
                      >
                        Delete
                      </label>

                      {deletingOrder && (
                        <>
                          <input
                            type="checkbox"
                            id="delete-confirm-modal"
                            className="modal-toggle"
                          />
                          <div className="modal modal-bottom sm:modal-middle ">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg text-red-600">
                                Are You Sure Want to Delete ?
                              </h3>
                              <p className="py-4 text-2xl">
                                {deletingOrder.orderName}
                              </p>
                              <div className="modal-action">
                                <label
                                  htmlFor="delete-confirm-modal"
                                  onClick={() =>
                                    handleDelete(deletingOrder._id)
                                  }
                                  className="btn btn-xs btn-error"
                                >
                                  Delete
                                </label>
                                <label
                                  htmlFor="delete-confirm-modal"
                                  className="btn btn-xs"
                                >
                                  Cancel
                                </label>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {order.price && order.paid && (
                    <button className="btn btn-success btn-xs">Paid</button>
                  )}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <button className="btn btn-secondary btn-xs">
                      Pending
                    </button>
                  )}
                  {order.price && order.paid && (
                    <button className="btn btn-success btn-xs">Shipped</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
