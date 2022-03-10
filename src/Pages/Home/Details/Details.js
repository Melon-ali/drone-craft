import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Details.css'

export default function Details() {
    const {user} = useAuth();
    const { id } = useParams();
    const [services, setServices] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
        // console.log(data)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=> res.json())
        .then(data => setServices(data));
    }, [id]);

    return (
        <div className="container">
            
            <Row>
                <Col sm={6}>
                    <div>
                        <Card style={{ width: '30rem', margin: 'auto', textAlign:'center' }}>
                            <Card.Img variant="top" src={services?.img} />
                            <Card.Body>
                                <Card.Title><h2>{services?.name}</h2></Card.Title>
                                <Card.Text>
                                    <h2>$ {services?.price}</h2>
                                    {services?.description}
                                </Card.Text>
                
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            defaultValue={services?.name}
                            className="p-2 m-2 w-100 input-field"
                        />

                        <input
                            {...register("description")}
                            defaultValue={services?.description}
                            placeholder="Description"
                            className="p-2 m-2 w-100 input-field"
                        />

                        <input
                            {...register("image", { required: true })}
                            placeholder="Image Link"
                            defaultValue={services?.img}
                            className="p-2 m-2 w-100 input-field"
                        />
                        <textarea required type="textarea" name="useraddress" placeholder="User Address" className="form-control" />
                        
                        <input
                            {...register("price", { required: true })}
                            placeholder="Price"
                            defaultValue={services?.price}
                            type="text"
                            className="p-2 m-2 w-100 input-field"
                        />

                        <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Order now"
                            className="btn btn-info w-50"
                        />
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
