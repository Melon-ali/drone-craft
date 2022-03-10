import React from 'react'
import './Order.css'

export default function Order(props) {
    console.log(props)
    const { name, description, img, price} = props.order;
    return (
        <div>
            <div className="">
                <div className="card service">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title" style={{color: 'gray'}}>{name}</h1>
                        <p className="card-text px-2">{description}</p>
                        <div className="d-flex bd-highlight">
                            
                            <div className=" flex-grow-1 bd-highlight"><h3 style={{color: 'gray'}}>Price: $ {[price]}</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
