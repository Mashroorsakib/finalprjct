import React from 'react';
import "./Order.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCoffee, faPlusSquare } from '@fortawesome/fontawesome-free-solid'
import { faListAlt,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { usercontext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
   const[loggeduser,setloggeduser]=useContext(usercontext)
   const [isadmin,setadmin]=useState(false)
   useEffect(()=>{
       fetch('https://nameless-springs-28046.herokuapp.com/isadmin',{
           method:"POST",
           headers:{'content-type':'application/json'},
           body:JSON.stringify({email:loggeduser.email})
       })
       .then(res=>res.json())
       .then(data=>setadmin(data))
   },[loggeduser.email])

    return (
        <div className="navlist">
           <ul className="ul-list">
              {
                  isadmin&&
                <div>
                      <li> <FontAwesomeIcon className="icon" icon={faHome} /> <Link to="Allorder"> <a href=""> Allorder</a> </Link> </li>
                      <li> <FontAwesomeIcon className="icon"  icon={faListAlt} /> <Link to="Manageproduct"> <a href="">Manageproduct</a> </Link> </li>
                      <li> <FontAwesomeIcon className="icon"  icon={faPlusSquare} /> <Link to="Addservice"><a href="">Add Service</a></Link> </li>
                </div>
              }{
                  !isadmin &&
                  <div>
                      
               <li> <FontAwesomeIcon className="icon"  icon={faListAlt} /> <Link to="Orderlist"> <a href=""> Order List</a> </Link> </li>
               <li> <FontAwesomeIcon className="icon"  icon={faAddressBook}/> <Link to="Review"> <a href=""> Give A review</a> </Link> </li>
                  </div>
              }
           </ul>
        </div>
    );
};

export default Order;