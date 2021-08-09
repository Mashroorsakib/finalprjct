import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./Showdata.css"

const Showdata = (props) => {
    const {Productname, Productprice, imageURL,_id } = props.name
    return (
        <div className="data">
              <img src={imageURL} alt="" />
        <div className="data__info">
            <h2>Name: {Productname}</h2>
            <h3>Price: {Productprice}$</h3>
           <Link to={`/show/${_id}`}> <Button variant="info">Buy Now</Button></Link>
        </div>
        </div>
    );
};

export default Showdata;