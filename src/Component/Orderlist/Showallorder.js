import React from 'react';
import "./Customerorder.css"
const Showallorder = (props) => {

     const {productname,image,price,status}=props.data

    return (
        <div className="customer-product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>Service Name: {productname}</p>
                <p>Price: {price}</p>
                <p>Order Status: {status}</p>
            </div>
        </div>
    );
};

export default Showallorder;