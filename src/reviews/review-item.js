import React, {useEffect, useState} from "react";
import Rating from "./rating/index.js"
import {useDispatch, useSelector} from "react-redux";
import "./rating/index";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {Link} from "react-router-dom";
import {findUserByIdThunk, findUserThunk} from "../services/user-thunk";
import {findReviewThunk} from "../services/review-thunk";

const ReviewItem = (
    {
        review, loggedIn
    }) => {

    const [profile, setProfile] = useState({});
    const [reviewer, setReviewer] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingReview, setReviewLoading] = useState(true);
    const {users} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        // const user = await dispatch(userProfileThunk())
        // setProfile(user.payload);
        const allUsers = await dispatch(findUserThunk())
        const reviewer = allUsers.payload.find(user => user._id === review.userId);
        setReviewer(reviewer);
        setLoading(false);
    };

    useEffect(() => {
        if (loggedIn && loading) {
            dispatch(userProfileThunk())
            getUserProfile();
        } else if (loading) {
            // console.log(profile.handle);
            dispatch(findUserThunk())
            getUserProfile();
        }
    }, [loading]);

    // const [isSelf, setIsSelf] = useState(currentID ? review.userId === currentID : false)

    return (
        <>
            {!loading && <div className="border text-white" id={review._id}>
                <div className="flex-row m-3 mb-1">
                    <div className="d-inline-block">
                        <img src={`/images/${reviewer.avatarIcon}`}
                             className="rounded-circle align-self-center"
                             height="50" width="50"/>
                    </div>
                    <div className="wd-color-white d-inline-block ms-3 mt-3">
                        <Link to={reviewer._id === profile._id ? '/profile' : `/profile/${reviewer._id}`}
                              className="text-white text-decoration-none fs-5 fw-bold ">
                            {reviewer.userName}
                            <span className="text-secondary fw-normal"> @{reviewer.handle}</span>
                        </Link><span> gave a rating of </span>
                        {
                            [...Array(5).keys()].map(key => key < review.rating ?
                                <i className="bi bi-star-fill wd-on me-1"/> :
                                <i className="bi bi-star wd-off me-1"></i>)
                            //Array(5).map(key => console.log(key))//key < review.rating? <i className="bi bi-star-fill wd-on"/> : <i className="bi bi-star"></i>)
                        }
                    </div>
                </div>
                <div className="flex-row ms-5 ps-4">
                    <p className="ms-2">{review.review}</p>
                </div>
            </div>
            }
        </>
    )
}
export default ReviewItem;

