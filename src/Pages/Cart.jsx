import React from 'react'
import { useCart, useDispatchCart } from '../Components/ContextReducer'
import trash from "../Assests/trash.png"
import { BACKEND_URL } from "../Constants/config"

const Cart = () => {
  let data = useCart()
   console.log("Data:"+data);
  let dispatch = useDispatchCart();
  if(data.length === 0){
    return(
        <div className='m-5 text-center text-danger fs-3'>Cart is Empty!...</div>
    )
  }
  const handleCheckOut = async () => {
    try {
      let userEmail = localStorage.getItem("userEmail")
      let img = localStorage.getItem("img")
      let response = await fetch(BACKEND_URL + "/orders/orderData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data, img,
          email: userEmail,
          order_date: new Date().toDateString()
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json(); // Parse the JSON from the response
      console.log("Order Response Data", responseData);
  
      if (response.status === 200) {
        dispatch({ type: "DROP" });
      }
    } catch (error) {
      console.error("Failed to complete the order:", error);
    }
  }
  
  let totalPrice = data.reduce((total, food)=> total+ food.price, 0)
  return (
  <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md '>
    <table className='table table-hover '>
       <thead className='text-success fs-4'>
        <tr>
        <th scope='col'>#</th>
        <th scope='col'>Name</th>
        <th scope='col'>Quantity</th>
        <th scope='col'>Option</th>
        <th scope='col'>Amount</th>
        <th scope='col'></th>
        </tr>
       </thead>
       <tbody>
         {data.map((food,index)=> (
         <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>{food.name}</td>
          <td>{food.qty}</td>
          <td>{food.size}</td>
          <td>{food.price}</td>
          <td><button type='button' className='btn p-0'><img src={trash} style={{width:"35px"}} alt="delete" onClick={()=>{dispatch({type:"REMOVE", index: index})}}></img></button></td>
         </tr>
         ))}
       </tbody>
    </table>
      <div>
          <h1 className='fs-2 text-light'>Total Price : {totalPrice}/-</h1>
      </div>
    <div>
         <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
    </div>
  </div>
  )
}

export default Cart
