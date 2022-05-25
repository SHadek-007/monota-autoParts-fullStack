import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?orderUser=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }
    },[user]);

    const handleDelete = () =>{
     
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
                  {(order.price && ! order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                  {(order.price && ! order.paid) && 
                    <label onClick={()=> handleDelete ()} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error ml-5">Cancel</label>
                    }
                  {(order.price && order.paid) && <div>
                    <p><span className="text-success">Paid</span></p>
                    <p>Transaction Id: <span className="text-success">{order.transactionId}</span></p>
                    </div>}
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