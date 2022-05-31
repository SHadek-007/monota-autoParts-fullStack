import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const ManageProducts = () => {
  // const [parts, setParts] = useProducts();

  const [deletingOrder, setDeletingOrder] = useState(false);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(`https://infinite-journey-21489.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => data)
  );

  const handleDelete = (id) => {
    const url = `https://infinite-journey-21489.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Product Successfully");
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
        All Products: {parts.length}
      </h2>
      <div className="overflow-x-auto ml-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>QN</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="product">
            {parts.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.aquantity}</td>
                <td>
                  {product.price && (
                    <>
                      <label
                        onClick={() => setDeletingOrder(product)}
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
                              <p className="py-4 text-2xl">
                                {deletingOrder.name}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
