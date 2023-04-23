import {Link} from "react-router-dom";
import TimeDisplay from "../../../time-display";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {findReviewThunk} from "../../../services/review-thunk";

const CommentItem = ({item, date}) => {
    const [review, setReview] = useState({})
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    const getReview = async () => {
        const reviews = await dispatch(findReviewThunk());
        setReview(reviews.payload.find(r => r._id === item.reviewID))
        console.log(reviews.payload)
        console.log(item)
        setLoading(false)
    }

    useEffect(() => {
        getReview()
    }, [])
    return (
        <div className="ms-5 mt-3 mb-3">
            {(review && !loading) &&
            <>
                <div className="row wd-black-bg align-items-center">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start me-2">
                            <Link to={`/detail/${review.itemType}${review.itemID}`}
                                  className="text-white text-decoration-none fs-5 fw-bold">
                                <img width={50} height={50} src={review.art} className="align-self-center"/>
                            </Link>
                            <div className="ms-3">
                                <div className="text-secondary w-100">
                                    <Link to={`/detail/${review.itemType}/${review.itemID}`}
                                          className="text-white text-decoration-none fs-5 fw-bold">
                                        {review.itemName}
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/detail/${review.itemType}/${review.itemID}`}
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
                        <Link to={`/detail/${review.itemType}/${review.itemID}/${item.reviewID}`}
                              className="text-white text-decoration-none fw-bold">
                            {<div className="wd-black-bg align-items-center fw-normal wd-gold">
                                <div className="">
                                    {item.comment.length > 75 ? `${item.comment.substring(0, 75)}...` : item.comment}
                                </div>
                            </div>
                            }
                        </Link>
                    </div>
                </div>
            </>}
            {!review && <div className="text-white fs-5 fw-normal">Comment Information is unavailable</div>}
        </div>
    )
}

export default CommentItem;