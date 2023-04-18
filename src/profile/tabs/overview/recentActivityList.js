import RecentActivityItem from "./recentActivityItem";
import React from "react";
import reviewsAr from "../../../data/reviews.json"

function RecentActivityList({user, isSelf}) {
    const reviews = user.reviews;
    const favorites = user.favoriteSongs;
    const newSongs = user.newSongs;
    const comments = user.comments;
    const userReviews = reviews.map(r => {
        const nx = reviewsAr.findIndex(r2 => r2._id === r)
        if (nx !== -1) {
            const nx = reviewsAr.findIndex(r2 => r2._id === r)
            if (nx !== -1) {
                const date = reviewsAr.find(r2 => r2._id === r).date
                return {
                    "_id": r,
                    date,
                    "type": "review"
                }
            } else {
                return {
                    "_id": r,
                    "date": Date.now(),
                    "type": "review"
                }
            }
        } else {
            return {
                "_id": r,
                "date": Date.now(),
                "type": "review"
            }
        }
    });
    const userFavorites = favorites.map(r => {
        return {
            ...r,
            "type": "favorites"
        }
    });
    const userNewSongs = newSongs.map(r => {
        return {
            ...r,
            "type": "newSongs"
        }
    });
    const userComments = comments.map(r => {
        return {
            ...r,
            "type": "comments"
        }
    });

    const overviewList = [...userReviews, ...userFavorites, ...userNewSongs, ...userComments];
    overviewList.sort(function (a, b) {
        return b.date - a.date;
    });
    return (
        <div className="wd-black-bg">
            {overviewList.length > 0 ?
                overviewList.map(activityItem => (<RecentActivityItem activityItem={activityItem}/>)) :
                (isSelf ? <span className="fw-normal fs-5">You have no recent activity to report</span> :
                    <span className="fw-normal fs-5">{user.userName} has no recent activity to report</span>)
            }
        </div>
    );
}

export default RecentActivityList;
