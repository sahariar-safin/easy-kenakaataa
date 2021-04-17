import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { productName, authorName, price, imgURL, _id } = props.product;

    return (
        <div class="card h-100 product">
            <img src={imgURL} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{productName}</h5>
                <p class="card-text">{authorName}</p>
            </div>
            <div class="card-footer d-flex flex-row flex-wrap justify-content-between">
                <h3>${price}</h3>
                <Link to={"/checkout/" + _id}><button className="btn btn-success">Add to cart</button></Link>
            </div>
        </div>
    );
};

export default Product;