import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

export default function Review() {
    const { user } = useAuth();
    const reserveImg = "https://i.ibb.co/0jz6gHX/avatar.png";

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const newReviewData = {
            ...data,
            rating_person: user.displayName || "Anonymous User",
            rating_person_img: user.photoURL || reserveImg
        };
        console.log(newReviewData);
        axios.post('https://tranquil-cliffs-84730.herokuapp.com/reviews', newReviewData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your feedback has been sent');
                    reset();
                }
        })
    };

    return (
        <div>
            <h2 className=" text-center pb-20 pt-20 text-3xl font-bold text-gray-700">Give us a Review</h2>
            <div >
                <form style={{width: '50%', margin: 'auto'}} onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text form-control">Type a rating number (Between 1-5):</span>
                    </label>
                    <input className="form-control" {...register("rating", { min: 1, max: 5 })} />

                    <label className="label form-control mt-2">
                        <span className="label-text">Your comment for us:</span>
                    </label>
                    <textarea className="form-control" {...register("comment", { required: true })} /> <br />
                    <input className="form-control btn" type="submit" />
                </form>
            </div>
        </div>
    );
}
