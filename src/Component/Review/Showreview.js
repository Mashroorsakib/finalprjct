import React from 'react';
import "./Showreview.css"
const Showreview = (props) => {
    const {Clientreview,Clientname}=props.name;
    return (
        <div className="review-data">
            <h1 align="center">{Clientname}</h1>
            <p>{Clientreview}</p>
            
        </div>
    );
};

export default Showreview;