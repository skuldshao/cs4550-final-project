import React, {useEffect, useState} from "react";
import ReviewItem from "./review-item";
import reviewArray from './review.json'


import {useParams} from "react-router";

import {findReviewThunk} from "../services/review-thunk";
import {useDispatch, useSelector} from "react-redux";
import {findReviewBySongIdThunk} from "../services/review-thunk.js";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";


const ReviewList = ({loggedIn}) => {
    const {id} = useParams();
    const {reviews} = useSelector(state => state.review)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const getProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setLoading(false)
    };

    const getNotLoggedIn = () => {
        setLoading(false)
    }

    useEffect(() => {
        dispatch(findReviewThunk())
        if (loggedIn) {
            getProfile();
        } else {
            getNotLoggedIn()
        }
    }, []);

    return (
        <ul className="list-group wd-bg-black">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {!loading &&
            reviews.filter(rev => rev.itemID === id).map(r =>
                <ReviewItem key={r._id} review={r} loggedIn={loggedIn} id={r._id}/>)
            }
        </ul>
    );
};
export default ReviewList;