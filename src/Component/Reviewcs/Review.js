import React from 'react';
import Order from "../Order/Order";
import "./Review.css"
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventdata ={
            Clientname: data.name,
            Clientreview : data.Review
           };
       
           const url=`https://nameless-springs-28046.herokuapp.com/addreview`
           fetch(url,{
             method:'POST',
             headers:{
               'Content-type':'application/json'
             },
             body: JSON.stringify(eventdata)
           })
           .then(res=>{console.log("server side response")})
      }
    return (
        <div className="review-list">
            <div>
                <Order></Order>
            </div>
            <div className="review-container">
                <form onSubmit={handleSubmit(onSubmit)} className="review-group">

                    <input placeholder="Enter Your Name" {...register("name")} />
                    <br />
                    <input placeholder="Enter Review" {...register("Review")} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;