import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://blueberry-cobbler-09808.herokuapp.com/products')
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [products]);
    const handleDelete = (id) => {
        fetch(`https://blueberry-cobbler-09808.herokuapp.com/deleteProduct/${ id }`, {
            method: "DELETE"
        })
            .then(res => console.log("successful"))
    }
    return (
        <div>
            <h1>Total products: {products.length}</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <th scope="row">{product.productName}</th>
                                <td>${product.price}</td>
                                <td> <button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;