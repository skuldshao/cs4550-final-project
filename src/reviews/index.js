import React from "react";
import ReviewItem from "./review-item";
import reviewArray from './review.json'
import {useSelector} from "react-redux";
import {useParams} from "react-router";



const ReviewList = ({
}) => {
    const params = useParams();
    //const reviewArray = useSelector(state => state.review);
    const filteredReviews = reviewArray.filter((review) => {
        return review.music_id == params.id;
    })
    return(
        <ul className = "list-group">
            {
                filteredReviews.map(review =>
                    <ReviewItem key={review.id} review={review}/>)
            }
        </ul>
    )
}
export default ReviewList;