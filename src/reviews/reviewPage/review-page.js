import React, {useEffect, useState} from "react";
import {getDate, ratingToStars} from "./util";
import {useDispatch, useSelector} from "react-redux";
import {findReviewByIdThunk} from "../../services/review-thunk.js"
import {useParams} from "react-router";



const ReviewPage = ({
}) => {


    const {id} = useParams();
    //const {review, loading} = useSelector(state => state.review);
    const [review, setReview] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchReview = async () => {
            const r = await dispatch(findReviewByIdThunk(id));
            setReview(r.payload);
            //console.log(r);
        };
        fetchReview();
    }, []);


    console.log(id);
    console.log(review);

    return(
        <div className="container wd-white bg-black">
            <div className="d-flex justify-content-between border rounded-5 align-items-center mb-2">
                <div className="ms-3 me-3">
                    <h1>Review of {review.itemName}</h1>
                </div>
                <div className="col-auto border rounded-5 p-2 me-3">
                    {review.type}
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border">
                <div className="row border-right align-items-center mb-2 ps-3 col-auto">
                    <div className="col-auto">
                        <img src="" alt="" width={50} height={50}
                             className="rounded-circle"/>
                    </div>
                    <div className="col-auto">
                        user name
                    </div>
                </div>
                <div className="col-auto pe-3">
                    <div>
                        {getDate(new Date(review.date))}
                    </div>
                </div>
            </div>
            <div className="row ps-3">
                <span>{ratingToStars(review.rating)}</span>
            </div>
            <div className="d-flex rounded border p-3:x">
                <textarea id="review-text" name="review-text"
                          value={review.review}
                          readonly="readonly"
                          rows={4}
                          className="form-control border-0 wd-review-textarea"
                />

            </div>

        </div>
    )

}

export default ReviewPage;