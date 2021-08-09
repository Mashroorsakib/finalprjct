import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Order from '../Order/Order';
import Showmanage from "./Showmanage"
import "./Manageproduct.css"

const Manageproduct = () => {
    const [loaddata,setdata]=useState([])
    useEffect(()=>{
        fetch('https://nameless-springs-28046.herokuapp.com/showdata')
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    })
    return (
        <div className="manage-product">
           <div>
               <Order></Order>
           </div>
           <div className="second">
             {
                 loaddata.map(data=> <Showmanage data={data}></Showmanage>)
             }
           </div>
        </div>
    );
};

export default Manageproduct;<h1>this is manage product</h1>