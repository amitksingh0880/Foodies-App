import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const response = await fetch("http://localhost:4000/orders/myOrders", {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            const data = await response.json();
            setOrderData(data);
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
                    {orderData.length > 0 ? orderData.map((order, index) => (
                        order.orderData ? order.orderData.order_data.slice(0).reverse().map((item, i) => (
                            item.map((arrayData, j) => (
                                <div key={`${index}-${i}-${j}`}>
                                    {arrayData.Order_date ? (
                                        <div className='m-auto mt-5'>
                                            <div>{arrayData.Order_date}</div>
                                            <hr />
                                        </div>
                                    ) : (
                                        <div className='col-12 col-md-6 col-lg-3' key={j}>
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>{arrayData.qty}</span>
                                                        <span className='m-1'>{arrayData.size}</span>
                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                                                            ₹{arrayData.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )) : ""
                    )) : <div>No orders found.</div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
