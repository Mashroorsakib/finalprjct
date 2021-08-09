import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Showdata from '../Showdata/Showdata'
import './Middlepart.css'
const Middlepart = () => {
    const [loaddata, setdata] = useState([]);
    useEffect(() => {
        fetch('https://nameless-springs-28046.herokuapp.com/showdata')
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
            console.log(loaddata.length)
    },[])
    return (
        <div >
              <h1 className="Heading" align="center"> Our Services</h1>
      <div className="fetch-data">
      {
          loaddata.length>0 ?
                loaddata.map(load=> <Showdata name={load}></Showdata>): <p>Loading.....</p>
       }
      </div>
        </div>
    );
};

export default Middlepart;