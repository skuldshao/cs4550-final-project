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
    const [writeC, setWriteC] = useState(false)
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        const admin = await dispatch(adminProfileThunk())
        if (user.payload) {
            setProfile(user.payload);
            setLoading(false)
        } else if (admin.payload) {
            setProfile(admin.payload);
            setLoading(false)
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
        <li className="list-group-item border-0 border-bottom border-danger bg-black mb-2">
            {(!loading && reviewer) && <div className="text-white pb-1" id={review._id}>
                <div className="flex-row m-3 mb-1">
                    <div className="d-inline-block">
                        <Link
                            to={loggedIn ? (reviewer._id === profile._id ? '/profile' : `/profile/${reviewer._id}`) : `/profile/${reviewer._id}`}>
                            <img src={`/images/${reviewer.avatarIcon}`}
                                 className="rounded-circle align-self-center"
                                 height="50" width="50"/>
                        </Link>
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
                        {review.comments.length > 0 && <div className="mb-3">
                            <button className="btn btn-danger" onClick={() => viewComments(!comments)}>
                                View {!comments ? review.comments.length : 'Less'} Comments
                            </button>
                        </div>}
                        {comments && <div className="mb-2">
                            {review.comments.map(c => <CommentItem item={c} loggedIn={loggedIn} reviewer={reviewer}
                                                                   profId={profile._id}/>)}
                        </div>}
                        <div>
                            {!writeC && <><i className="bi bi-caret-down-fill wd-gold"
                                             onClick={() => setWriteC(true)}/> Want to write a comment?</>}
                            {writeC && <span><i className="bi bi-caret-up-fill wd-gold"
                                                onClick={() => setWriteC(false)}/>
                                <WriteComment
                                    review={review}
                                    user={profile}/></span>}
                        </div>
                    </>}
                </div>
            </div>
            }
        </li>
    )
}
export default ReviewItem;

