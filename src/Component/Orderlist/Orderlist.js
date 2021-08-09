import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { usercontext } from '../../App';
import Order from '../Order/Order';
import "./Orderlist.css"
import Showallorder from './Showallorder';

const Orderlist = () => {
    const [loadorder,setorder]=useState([])
    const [loggeduser,setloggeduser]=useContext(usercontext)
    useEffect(()=>{
        fetch(`https://nameless-springs-28046.herokuapp.com/booking/${loggeduser.email}`)
        .then(res=>res.json())
        .then (data=>
            setorder(data)
            )
    })
    return (
        <div className="order-list">
            <div>
                <Order></Order>
            </div>
            <div>
                {
                    loadorder.map(data=> <Showallorder data={data}></Showallorder>)
                }
            </div>
        </div>
    );
};

export default Orderlist;