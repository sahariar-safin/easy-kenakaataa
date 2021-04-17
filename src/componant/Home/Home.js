import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        axios.get('https://blueberry-cobbler-09808.herokuapp.com/products')
            .then(function (response) {
                setProducts(response.data);
                setSpinner(!spinner)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    return (
        <div className="container">
            <form class="col-md-6 m-auto py-5">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search products ..."></input>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-success">Search</button>
                    </div>
                </div>
            </form>
            <div className="products d-flex flex-wrap justify-content-evenly">
                {spinner
                    ? <CircularProgress color="secondary" />
                    : products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;