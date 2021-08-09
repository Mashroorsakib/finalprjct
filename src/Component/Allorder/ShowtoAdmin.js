import React from 'react';

const ShowtoAdmin = ({data}) => {
    const { productname, image, price, status, paymentprocess, email,_id } = data;
    const handlechange=(e)=>{
        console.log(e.target.value)
        const status=e.target.value;
        const updatestatus={status}
        fetch(`https://nameless-springs-28046.herokuapp.com/update/${_id}`,{
            method:'PATCH',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(updatestatus)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log("updated")
        })
    }
    return (
       <tr>
           <td>{productname}</td>
           <td>{price}</td>
           <td>{email}</td>
          <td>
          <form>
                    <select onChange={handlechange} id="dropdown">
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirm</option>
                        <option value="Canceled">Cancel</option>
                    </select>
                </form>
          </td>
       </tr>
    );
};

export default ShowtoAdmin;