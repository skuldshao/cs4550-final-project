import React from "react";
import {Link} from "react-router-dom";
import reviews from "../../../data/reviews.json"
import TimeDisplay from "../../../time-display";
import Stars from "../../../stars";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {profileThunk as userProfileThunk} from "../../../services/user-auth-thunk";
import {findReviewByIdThunk, findReviewBySongIdThunk, findReviewThunk} from "../../../services/review-thunk";

function ReviewItem({reviewItem, date}) {

    const dispatch = useDispatch();
    const [review, setReview] = useState({});
    const [loading, setLoading] = useState(true)
    const getReview = async () => {
        const reviewData = await dispatch(findReviewByIdThunk(reviewItem));
        setReview(reviewData.payload);
        await dispatch(findReviewThunk())
        setLoading(false)
        console.log(reviewData.payload);
    };

    useEffect(() => {
        getReview();
    }, []);

    // const nx = reviews.findIndex(r => r._id === reviewItem);
    // let review;
    // if (nx !== -1) {
    //     review = reviews.find(r => r._id === reviewItem)
    // }

    return (
        <div className="ms-5 mt-3 mb-3">
            {review ? <>
                <div className="row wd-black-bg align-items-center">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start me-2">
                            <Link to={`/detail/${review.itemId}`}
                                  className="text-white text-decoration-none fs-5 fw-bold">
                                <img width={50} height={50} src={review.art} className="align-self-center"/>
                            </Link>
                            <div className="ms-3">
                                <div className="text-secondary w-100">
                                    <Link to={`/detail/${review.itemId}`}
                                          className="text-white text-decoration-none fs-5 fw-bold">
                                        {review.itemName}
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/detail/${review.itemId}`}
                                          className="text-secondary text-decoration-none fs-5 fw-normal">
                                        {review.artist && review.artist}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {date && <TimeDisplay itemDate={review.date}/>}
                    </div>
                </div>
                <div className="mt-2">
                    <div className="ms-3 align-self-center">
                        <Link to={`/detail/${review.itemId}/${reviewItem}`}
                              className="text-white text-decoration-none fw-bold">
                            <Stars rating={review.rating}/>
                            {
                                review.review ?
                                    <div className="wd-black-bg align-items-center fw-normal wd-gold">
                                        <div className="">
                                            {review.review.length > 75 ? `${review.review.substring(0, 75)}...` : review.review}
                                        </div>
                                    </div> : <></>
                            }
                        </Link>
                    </div>
                </div>
            </> : <div className="text-white fw-normal fs-5">No Review Information available</div>
            }
        </div>
    )
}

export default ReviewItem
