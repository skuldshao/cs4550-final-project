import React from "react";
import {Link} from "react-router-dom";
import reviews from "../../../data/reviews.json"
import TimeDisplay from "../../../time-display";
import Stars from "../../../stars";

function ReviewItem({reviewItem, date}) {
    const review = reviews.find(r => r._id === reviewItem)

    return (
        <div className="ms-5 mt-3 mb-3">
            <div className="row wd-black-bg align-items-center">
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start me-2">
                        <Link to={`/detail/${review.itemID}`}
                              className="text-white text-decoration-none fs-5 fw-bold">
                            <img width={50} height={50} src={review.art} className="align-self-center"/>
                        </Link>
                        <div className="ms-3">
                            <div className="text-secondary w-100">
                                <Link to={`/detail/${review.itemID}`}
                                      className="text-white text-decoration-none fs-5 fw-bold">
                                    {review.itemName}
                                </Link>
                            </div>
                            <div>
                                <Link to={`/detail/${review.itemID}`}
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
                    <Link to={`/detail/${review.itemID}/${reviewItem}`}
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
        </div>
    )
}

export default ReviewItem
