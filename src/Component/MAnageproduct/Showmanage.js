import React from 'react';
import "./Showmanage.css"
const showmanage = (props) => {
    const {Productname,_id}=props.data;
    const handledelete= data=>{
        fetch(`https://nameless-springs-28046.herokuapp.com/delete/${data}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("deleted sucessfull")
        })
       }
    return (
        <div className="product-row">
           <div>
           <p>Product Name: {Productname} </p>
           </div>
           <div>
           <button onClick={()=>{handledelete(_id)}}>Delete</button>
           </div>
        </div>
    );
};

export default showmanage;