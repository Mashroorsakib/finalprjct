import React from 'react';
import Order from '../Order';
import axios from 'axios';
import "./Addservice.css";
import { useForm } from "react-hook-form";
import { useState } from 'react';
const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventdata ={
            Productname: data.name,
            imageURL: imageURL,
            Productprice:data.price
           };
       
           const url=`https://nameless-springs-28046.herokuapp.com/addevent`
           fetch(url,{
             method:'POST',
             headers:{
               'Content-type':'application/json'
             },
             body: JSON.stringify(eventdata)
           })
           .then(res=>{console.log("server side response")})
    }

    const handleimageupload = event=>{
        console.log(event.target.files[0])
        const imageData=new FormData();
        imageData.set('key','8b5d23e8b485df82b5db571858eebb72')
        imageData.append('image',event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
        .then(function (response){
        const imageurl=response.data.data.display_url;
         console.log(imageurl)
         setImageURL(response.data.data.display_url) 
        })
        // console.log(imageURL)
        .catch(function (error){
          console.log(error);
        });
      }
    return (
        <div className="add-service">
            <div>
                <Order></Order>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="from-group">

                    <input  {...register("image")} type="file" className="file-grp" onChange={handleimageupload} />
                    <br/>
                    <input placeholder="Enter Service Name" {...register("name")} />
                    <br />
                    <input placeholder="Enter Service Price" {...register("price")} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Addservice;