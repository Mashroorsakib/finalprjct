import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Order from '../Order/Order';
import "./Allorder.css"
import ShowtoAdmin from './ShowtoAdmin';

const Allorder = () => {
 
    const [loaddata,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://nameless-springs-28046.herokuapp.com/showalldata')
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    })
    return (
        <div className="order-container"> 
            <div>
                <Order></Order>
            </div>
            <div className="second">
                <table style={{width: '100%'}}>
                    <tr>
                    <th>Service Name</th>
                    <th>Service Price</th>
                    <th>Email </th>
                    <th>Order status</th>
                    </tr>
                    
                    {
                        loaddata.map(data=> <ShowtoAdmin data={data}></ShowtoAdmin>)
                    }
                    
                </table>
            </div>
        </div>
    );
};

export default Allorder;<h1>this is for all order</h1>