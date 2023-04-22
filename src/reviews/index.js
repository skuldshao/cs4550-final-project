import React, {useEffect, useState} from "react";
import ReviewItem from "./review-item";
import reviewArray from './review.json'


import {useParams} from "react-router";

import {findReviewThunk} from "../services/review-thunk";
import{useDispatch, useSelector} from "react-redux";
import {findReviewBySongIdThunk} from "../services/review-thunk.js";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";


const ReviewList = ({
}) => {
    //gets the itemId from url
    const {id} = useParams();
    const {reviews, loading} = useSelector(state => state.review)
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const getProfile = async () => {
        const admins = await dispatch(adminProfileThunk());
        const adVal = admins.type === "adminAuth/profile/fulfilled"
        setAdmin(adVal);
        const users = await dispatch(userProfileThunk())
        const loggedInVal = users.type === "userAuth/profile/fulfilled" || admin
        setLoggedIn(loggedInVal)
    };

    useEffect(() => {
        getProfile()
        dispatch(findReviewBySongIdThunk(id));
    }, []);

    // console.log(loggedIn)

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