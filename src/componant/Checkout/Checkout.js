import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [checkOut, setCheckOut] = useState([]);
    useEffect(() => {
        axios.get(`https://blueberry-cobbler-09808.herokuapp.com/product/${ id }`)
            .then(function (response) {
                setCheckOut(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email, displayName } = loggedInUser;
    const handleCheckOut = () => {
        const userData = { email, displayName };
        checkOut._id = (Math.random() * 10000000).toFixed(0);
        const checkOutData = {
            quantity: 1,
            date: new Date,
            ...checkOut
        };
        const Data = { ...userData, ...checkOutData }
        axios.post('https://blueberry-cobbler-09808.herokuapp.com/checkout', Data)
            .then(function (response) {

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{checkOut.productName}</td>
                        <td>1</td>
                        <td>{checkOut.price}</td>
                    </tr>
                    <tr className="table-primary">
                        <td><strong>Total:</strong></td>
                        <td></td>
                        <td><strong> {checkOut.price}</strong></td>
                    </tr>
                    <tr className="table-primary">
                        <td></td>
                        <td></td>
                        <td><button onClick={handleCheckOut} className="btn btn-primary">CheckOut</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;