import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("http://localhost:4000/orders/myOrders", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            const data = await response.json();
            if (data.orderData && data.orderData.order_data) {
                setOrderData(data.orderData.order_data);
                console.log("Result:"+ orderData[0]);
            }
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                   
                    {orderData.length > 0 ? orderData.map((orderArray, index) => (
                        <div key={index}>
                            {orderArray.map((item, itemIndex) => (
                                <div key={`${index}-${itemIndex}`}>
                                    {item.Order_date ? (
                                        <div className='m-auto mt-5'>
                                            <div>{item.Order_date}</div>
                                            <hr />
                                        </div>
                                    ) : (
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* Uncomment and ensure the image URL is correct */}
                                        {/* <img src={item.img} className="card-img-top" alt={item.name} style={{ height: "120px", objectFit: "fill" }} /> */}
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{item.qty}</span>
                                                <span className='m-1'>{item.size}</span>
                                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                    ₹{item.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )) : <div>No orders found.</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
