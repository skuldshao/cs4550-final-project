import React, {useState} from "react";
import {createReview} from "../reducers/review-reducer";
import {useDispatch} from "react-redux";
import Rating from "./rating";
import "./write-review.css"

const WriteReview = () => {
    let[writeReview, setWriteReview] = useState('');

        return (
        <div className="align-content-center border p-3">
            <div className="row">
                Write a review:
            </div>
            <div className="row">
                <div className="w-100">
                    <textarea id="new-review" name="new-review"
                              placeholder="Share your thoughts here."
                              rows={4}
                              className="form-control border-0 wd-review-textarea"
                              onChange={(event) => setWriteReview(event.target.value)}>

                    </textarea>
                </div>
                <div className="row">
                    <div className="col">
                        <Rating/>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button className="rounded-pill wd-add-review btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WriteReview;

