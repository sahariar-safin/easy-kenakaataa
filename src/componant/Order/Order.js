import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`https://blueberry-cobbler-09808.herokuapp.com/orders?email=${ loggedInUser.email }`)
            .then(function (response) {
                setOrder(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="container">
            <h3>You have {order.length || 0} orders!</h3>
            {
                order.map(order =>
                    <div className='card order-card'>
                        <div className=" order-details">
                            <h5>Order Details: {order._id}</h5>
                            <h5>Total: {order.price}</h5>
                            <h5>Date: {new Date(order.date).toDateString('MM/dd/yyyy')}</h5>
                        </div>
                        <div className="product-details d-flex flex-row justify-content-start">
                            <div>
                                <img className="product-image" src={order.imgURL} alt="" />
                            </div>
                            <div className="">
                                <h3>{order.productName}</h3>
                                <h3>Quantity: {order.quantity}</h3>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Order;