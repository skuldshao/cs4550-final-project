import React, {useEffect, useState} from "react";
import {getDate} from "./util";
import {useDispatch, useSelector} from "react-redux";
import {findReviewByIdThunk} from "../../services/review-thunk.js"
import {useParams} from "react-router";
import {Link} from "react-router-dom";

import {profileThunk as userProfileThunk} from "../../services/user-auth-thunk";



const ReviewPage = ({
}) => {


    const {id} = useParams();
    //const {review, loading} = useSelector(state => state.review);
    const [review, setReview] = useState({});
    const dispatch = useDispatch();

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const getProfile = async () => {
        const profileData = await dispatch(userProfileThunk());
        const profile = profileData.payload;
        setProfile(profile);
        setLoading(false);

    }

    useEffect(() => {
        const fetchReview = async () => {
            const r = await dispatch(findReviewByIdThunk(id));
            setReview(r.payload[0]);
            //console.log(r);
        };
        fetchReview();
        getProfile();
    }, []);


    const detailLink = `/detail/${review.type}/${review.itemId}`;
    const searchLink = `/search`;

    //console.log(id);
    console.log(review[0]);
    console.log(profile);

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
            <div className="d-flex justify-content-between align-items-center ">
                <div className="row border-right align-items-center mb-2 ps-3 col-auto">
                    <div className="col-auto">
                        <Link to={review.itemId ? detailLink : searchLink}>
                            <img src={review.art} alt="" width={50} height={50}
                            className="rounded-circle"/>
                        </Link>

                    </div>
                    <div className="col-auto">
                        written by {profile.userName}
                    </div>
                    <div className="col-auto">
                        {
                            [...Array(5).keys()].map(key => key < review.rating ?
                                <i className="bi bi-star-fill wd-on me-1"/> :
                                <i className="bi bi-star wd-off me-1"></i>)
                            //Array(5).map(key => console.log(key))//key < review.rating? <i className="bi bi-star-fill wd-on"/> : <i className="bi bi-star"></i>)
                        }
                    </div>
                </div>
                <div className="col-auto pe-3">
                    <div>
                        {getDate(new Date(review.date))}
                    </div>
                </div>
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