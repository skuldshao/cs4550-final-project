import reviewsAr from "../data/reviews.json";
import {HomeList} from "./home-list";
import React from "react";

const NotLoggedInHome = ({users}) => {
    let overviewList = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const reviews = user.reviews;
        const userReviews = reviews.map(r => {
            const nx = reviewsAr.findIndex(r2 => r2._id === r)
            if (nx !== -1) {
                const nx = reviewsAr.findIndex(r2 => r2._id === r)
                if (nx !== -1) {
                    const date = reviewsAr.find(r2 => r2._id === r).date
                    return {
                        "_id": r,
                        date,
                        "type": "review",
                        "user": user
                    }
                } else {
                    return {
                        "_id": r,
                        "date": Date.now(),
                        "type": "review",
                        "user": user
                    }
                }
            } else {
                return {
                    "_id": r,
                    "date": Date.now(),
                    "type": "review",
                    "user": user
                }
            }
        });
        const joined = {
            "date": user.joined,
            "type": "joined",
            "user": user,
            "kind": "user"
        };
        overviewList = [...overviewList, ...userReviews, joined];
    }
    overviewList.sort(function (a, b) {
        return b.date - a.date;
    });
    return (
        <div className="wd-black-bg">
            <ul className="list-group">
                {
                    overviewList.length > 0 && overviewList.map(activityItem => (
                        <HomeList activityItem={activityItem}/>))
                }
            </ul>
        </div>
    )
}
export default NotLoggedInHome