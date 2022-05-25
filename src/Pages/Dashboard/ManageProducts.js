import React from "react";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [parts, setParts] = useProducts();

  const handleDelete = (id) =>{
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.deletedCount > 0) {
          const remainig = parts.filter((product) => product._id !== id);
          setParts(remainig);
        }
    });
        toast.success("Delete Product Successfully");
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
          <tbody className="bproduct">
            {parts.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.aquantity}</td>
                <td>
                    <button className="btn btn-xs btn-error" onClick={() => handleDelete(product._id)}>Delete</button>
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
