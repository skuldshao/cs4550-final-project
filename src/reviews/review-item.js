import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./rating/index";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {Link} from "react-router-dom";
import {findUserThunk} from "../services/user-thunk";
import CommentItem from "./CommentItem";
import WriteComment from "./WriteComment";

const ReviewItem = (
    {
        review, loggedIn
    }) => {

    const [profile, setProfile] = useState({});
    const [reviewer, setReviewer] = useState({});
    const [loading, setLoading] = useState(true);
    const [comments, viewComments] = useState(false)
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        if (loggedIn) {
            const user = await dispatch(userProfileThunk())
            if (user.payload) {
                setProfile(user.payload);
            } else {
                const user = await dispatch(adminProfileThunk())
                setProfile(user.payload);
            }
        }
        const allUsers = await dispatch(findUserThunk())
        const reviewer = allUsers.payload.find(user => user._id === review.userId);
        setReviewer(reviewer);
        setLoading(false);
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <>
            {(!loading && reviewer) && <div className="border text-white" id={review._id}>
                <div className="flex-row m-3 mb-1">
                    <div className="d-inline-block">
                        <img src={`/images/${reviewer.avatarIcon}`}
                             className="rounded-circle align-self-center"
                             height="50" width="50"/>
                    </div>
                    <div className="wd-color-white d-inline-block ms-3 mt-3">
                        <Link
                            to={loggedIn ? (reviewer._id === profile._id ? '/profile' : `/profile/${reviewer._id}`) : `/profile/${reviewer._id}`}
                            className="text-white text-decoration-none fs-5 fw-bold ">
                            {reviewer.userName}
                            <span className="text-secondary fw-normal"> @{reviewer.handle}</span>
                        </Link><span> gave a rating of </span>
                        {
                            [...Array(5).keys()].map(key => key < review.rating ?
                                <i className="bi bi-star-fill wd-on me-1"/> :
                                <i className="bi bi-star wd-off me-1"/>)
                            //Array(5).map(key => console.log(key))//key < review.rating? <i className="bi bi-star-fill wd-on"/> : <i className="bi bi-star"></i>)
                        }
                    </div>
                </div>
                <div className="flex-row ms-5 ps-4">
                    <p className="ms-2">{review.review}</p>
                    {loggedIn && <>
                        <div className="mb-3">
                            <button className="btn btn-danger" onClick={() => viewComments(!comments)}>
                                View {!comments ? 'More' : 'Less'} Comments
                            </button>
                        </div>
                        {comments && <div className="mb-2">
                            {review.comments.map(c => <CommentItem item={c}/>)}
                        </div>}
                        <div>
                            <WriteComment review={review} user={reviewer}/>
                        </div>
                    </>}
                </div>
            </div>
            }
        </>
    )
}
export default ReviewItem;

