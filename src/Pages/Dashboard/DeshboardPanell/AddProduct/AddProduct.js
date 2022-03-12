import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "pending";
        fetch("https://tranquil-cliffs-84730.herokuapp.com/addproducts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
        // console.log(data)
    }
    return (
        <div>
            <h1>This is  a product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="p-2 m-2 w-100 input-field"
                        />

                        <input
                            {...register("description")}
                            placeholder="Description"
                            className="p-2 m-2 w-100 input-field"
                        />

                        <input
                            {...register("image", { required: true })}
                            placeholder="Image Link"
                            className="p-2 m-2 w-100 input-field"
                        />
                        
                        
                        <input
                            {...register("price", { required: true })}
                            placeholder="Price"
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
    );
}
