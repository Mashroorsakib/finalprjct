import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import "./Product.css"
import { useContext } from 'react';
import { usercontext } from '../../App';
const Product = () => {
       
    const [loaddata,setdata]=useState();
    const [loggeduser,setloggeduser]=useContext(usercontext)
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://nameless-springs-28046.herokuapp.com/singleproduct/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    })
    
    const handleorder = () => {
        const productname = loaddata.Productname;
        const image = loaddata.imageURL;
        const price = loaddata.Productprice;
        const status="pending"
        const bookingdetails = { ...loggeduser, productname, image, price,status,}
        fetch('https://nameless-springs-28046.herokuapp.com/bookingdetails', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingdetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("ordersucessfull")
                }
            })
    }

    return (
        <div className="single-product">
            <div>
            <img src={loaddata?.imageURL} alt="" />
            </div>
             <div>
                <p>Service Name:{loaddata?.Productname} </p>
                <p>Service Price: {loaddata?.Productprice}</p>
                <Button variant="outline-primary" onClick={()=>handleorder()}>Place order</Button>
            </div>
            <br />
           
        </div>
    );
};

export default Product;