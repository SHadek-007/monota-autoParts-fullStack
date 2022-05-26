import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(false);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://infinite-journey-21489.herokuapp.com/order?orderUser=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => data)
  );

  const handleDelete = (id) => {
    fetch(`https://infinite-journey-21489.herokuapp.com/order/${id}`, {
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
        My Orders: {orders.length}
      </h2>
      
      <div className="overflow-x-auto ml-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>QN</th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="border">
            {orders.map((order, index) => (
              
              <tr key={order._id}>
                
                <th>{index + 1}</th>
                <td>{order.orderUserName}</td>
                <td>{order.orderName}</td>
                <td>$ {order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {order.price && !order.paid && (
                    <>
                      <label
                        onClick={() => setDeletingOrder(order)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error ml-5"
                      >
                        Cancel
                      </label>
                    
                      {deletingOrder && (
                        <>
                        
                          <input
                            type="checkbox"
                            id="delete-confirm-modal"
                            className="modal-toggle"
                          />
                          <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg text-red-600">
                                Are You Sure Want to Delete?
                              </h3>
                              <p className="py-4 text-2xl">{deletingOrder.orderName}</p>
                              <div className="modal-action">
                                <label
                                  htmlFor="delete-confirm-modal"
                                  onClick={() => handleDelete(deletingOrder._id)}
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
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction Id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
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

export default MyOrders;
