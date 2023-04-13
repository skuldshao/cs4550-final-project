import React from "react";
import {Link} from "react-router-dom";
import reviews from "../../../data/reviews.json"

function ReviewItem({reviewItem}) {
    const review = reviews.find(r => r._id === reviewItem)
    const rating = review.rating;
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<i className="bi bi-star-fill wd-gold"/>);
    }
    let half = false;
    if ((rating - stars.length) > 0) {
        half = true;
    }
    const mt = 5 - (Math.ceil(rating))
    const mtStars = [];
    for (let i = 0; i < mt; i++) {
        mtStars.push(<i className="bi bi-star wd-gold"/>);
    }

    const diff = (Date.now() / 1000) - (review.date);
    let timeElapsedString = "";

    const elapsedDays = Math.floor(diff / (60 * 60 * 24));
    if (elapsedDays > 0) {
        timeElapsedString += `${elapsedDays}d, `;
    }

    const elapsedHours = Math.floor((diff / (60 * 60)) % 24);
    if (elapsedHours > 0) {
        timeElapsedString += `${elapsedHours}h, `;
    }

    const elapsedMinutes = Math.floor((diff / 60) % 60);
    if (elapsedMinutes > 0) {
        timeElapsedString += `${elapsedMinutes}m, `;
    }

    const elapsedSeconds = Math.floor(diff % 60);
    timeElapsedString += `${elapsedSeconds}s`;

    return (
        <div className=" ms-5 mt-3 mb-3">
            <div className="row wd-black-bg align-items-center">
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
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
                    <div className="text-secondary fs-5 fw-normal me-5">
                        {timeElapsedString} ago
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="ms-3 align-self-center">
                    <Link to={`/detail/${review.itemID}/${reviewItem}`}
                          className="text-white text-decoration-none fw-bold">
                        {
                            stars.map(() => {
                                return (<i className="bi bi-star-fill wd-gold"/>)
                            })
                        }
                        {
                            half && <i className="bi bi-star-half wd-gold"/>
                        }
                        {
                            mtStars.map(value => {
                                return value
                            })
                        }
                        {
                            review.review ?
                                <div className="wd-black-bg align-items-center fw-normal wd-gold">
                                    <div className="">
                                        {review.review.length > 100 ? `${review.review.substring(0, 75)}...` : review.review}
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
