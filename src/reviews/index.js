import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import reviewArray from './review.json'

import {useParams} from "react-router";

import {findReviewThunk} from "../services/review-thunk";
import{useDispatch, useSelector} from "react-redux";
import {findReviewBySongIdThunk} from "../services/review-thunk.js";


const ReviewList = ({
}) => {
    //gets the itemId from url
    const {id} = useParams();
    const {reviews, loading} = useSelector(state => state.review)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findReviewBySongIdThunk(id));
    }, [])

    console.log(reviews);

    return(
        <ul className = "list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                reviews.map(review =>
                    <ReviewItem key={review._id} review={review}/>)
            }
        </ul>
    );
};
export default ReviewList;