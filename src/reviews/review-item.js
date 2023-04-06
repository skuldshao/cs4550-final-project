import React from "react";
import {useDispatch} from "react-redux";
import "../search/index.css"

const ReviewItem = (
    {
        review = {
            "_id": 1,
            "music_id": 1,
            "handle": "@test1",
            "image": "",
            "time": "1min",
            "rating": 5,
            "likes": 10,
            "review": "review1"
        }
    }) => {

    return(
        <div className="border">
            <div className="flex-row">
                <div className="">
                    <img width={50}
                         height={50}
                         className="float-start rounded-circle"
                         alt=""
                         src={""}/>
                </div>
                <div className="">
                    <p>{review.rating}</p>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <p>{review.handle}</p>
                </div>
            </div>
            <div className="flex-row">
                <p>{review.review}</p>
            </div>

        </div>
    )
}
export default ReviewItem;

