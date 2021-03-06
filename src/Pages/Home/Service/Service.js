import React from 'react'
import { Link } from 'react-router-dom';
import './Service.css'

export default function Service(props) {
    const {_id, name, description, image, price} = props.service;
  return (
    <div>
        <div className="">
            <div className="card service">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title" style={{color: 'white'}}>{name}</h1>
                    <p className="card-text px-2" style={{color: 'gray'}}>{description}</p>
                    <div className="">
                        <div className=""><h3 style={{color: 'white'}}>Price: $ {[price]}</h3></div>
                        <div className="">
                            <Link to={`/details/${_id}`}>
                                <button className="btn">VIEW DETAILS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
