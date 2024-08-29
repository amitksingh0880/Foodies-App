import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "../ContextReducer";
import LoginPage from "../../Pages/LoginPage";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { auth } = useSelector((state) => state.userReducer);
  let dispatch = useDispatchCart();
  let options = props.options;
  const priceRef = useRef();
  let data = useCart();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty
        });
        return;
      } else {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size
        });
      }
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size
      });
    }
  };

  const handleButtonClick = () => {
    if (auth) {
      handleAddToCart();
    } else {
      window.location.href = "/login";
    }
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
       setSize(priceRef.current.value)
  },[])
  localStorage.setItem("img",props.foodItem.img);
  return (
    <div>
      <div
        className="card mt-3 "
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">
            {/* Some quick example text to build on the card */}
          </p>
          <div className="container w-100 ">
            <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef}  onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">
                  {finalPrice}/-
            </div>
          </div>
          <hr />
          <button className="btn btn-success justify-content-center  ms-2" onClick={ auth ? handleAddToCart : <LoginPage/>}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
