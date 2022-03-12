import React, { useEffect, useState } from 'react'
import Order from '../../../Order/Order';

export default function ManageOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://tranquil-cliffs-84730.herokuapp.com/allorder`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div className="service-container mt-5">
            {
                orders.map(order => <Order
                    order={order}
                ></Order>)
            }
        </div>
    );
}
