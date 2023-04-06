import React, {useState} from "react";
import {createReview} from "../reducers/review-reducer";
import {useDispatch} from "react-redux";

const WriteReview = () => {
    let[writeReview, setWriteReview] = useState('');
    const dispatch = useDispatch();
    const reviewClickHandler = () => {
        const newReview = {
            review: writeReview
        }
        dispatch(createReview(newReview));
        setWriteReview('');
    }
    return (
        <div className="row">
            <div className="col-10">
                <textarea value={writeReview} placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWriteReview(event.target.value)}>
                </textarea>
            </div>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={reviewClickHandler}>
                    Add
                </button>
            </div>
        </div>
    )
}
export default WriteReview;

