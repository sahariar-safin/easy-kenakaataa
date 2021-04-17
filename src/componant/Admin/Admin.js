import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Admin.css';

const Admin = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            <Router>
                <div className="col-4">
                    <div className="left-section">
                        <Link to="/admin/manage"> <h1>Manage Products</h1> </Link>
                        <Link to="/admin/add"> <h1>Add Product</h1> </Link>
                        <Link to="/admin/edit"> <h1>Edit Product</h1> </Link>
                    </div>
                </div>
                <div className="col-7">
                    <Switch>
                        <Route path="/admin/add">
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path="/admin/manage">
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Admin;