import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Showreview from './Showreview';
import "./Loadreview.css"

const Loadreview = () => {
       const [loadreview,setreview]=useState([]);
       useEffect(()=>{
           fetch('https://nameless-springs-28046.herokuapp.com/showreview')
           .then(res=>res.json())
           .then(data=>setreview(data))
       },[])
    return (
        <div className="Container">
            <h1 className="ContainerName">Testimonial</h1>
          <div  className="rowwise">
          {
              loadreview.length>0?
                loadreview.map(load=> <Showreview name={load}></Showreview>): <p>Loading...</p>

          }
          </div>
        </div>
    );
};

export default Loadreview;