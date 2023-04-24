import React from "react";
import {Link} from "react-router-dom";
import TimeDisplay from "../../../time-display";
import Stars from "../../../stars";

function ReviewItem({reviewItem, date}) {

    return (
        <div className="ms-5 mt-3 mb-3">
            {reviewItem ? <>
                <div className="row wd-black-bg align-items-center">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start me-2">
                            <Link to={`/detail/${reviewItem.itemType}/${reviewItem.itemID}`}
                                  className="text-white text-decoration-none fs-5 fw-bold">
                                <img width={50} height={50} src={reviewItem.art} className="align-self-center"/>
                            </Link>
                            <div className="ms-3">
                                <div className="text-secondary w-100">
                                    <Link to={`/detail/${reviewItem.itemType}/${reviewItem.itemID}`}
                                          className="text-white text-decoration-none fs-5 fw-bold">
                                        {reviewItem.itemName}
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/detail/${reviewItem.itemType}/${reviewItem.itemID}`}
                                          className="text-secondary text-decoration-none fs-5 fw-normal">
                                        {reviewItem.artist && reviewItem.artist}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {date && <span className="text-secondary"><TimeDisplay itemDate={reviewItem.date}/></span>}
                    </div>
                </div>
                <div className="mt-2">
                    <div className="ms-3 align-self-center">
                        <Link to={`/detail/${reviewItem.itemType}/${reviewItem.itemID}`}
                              className="text-white text-decoration-none fw-bold">
                            <Stars rating={reviewItem.rating}/>
                            {
                                reviewItem.review ?
                                    <div className="wd-black-bg align-items-center fw-normal wd-gold">
                                        <div className="">
                                            {reviewItem.review.length > 75 ? `${reviewItem.review.substring(0, 75)}...` : reviewItem.review}
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
