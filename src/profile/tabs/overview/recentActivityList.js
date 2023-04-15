import RecentActivityItem from "./recentActivityItem";
import React from "react";
import reviewsAr from "../../../data/reviews.json"

function RecentActivityList({user}) {
    const reviews = user.reviews;
    const favorites = user.favoriteSongs;
    const newSongs = user.newSongs;
    const comments = user.comments;
    const userReviews = reviews.map(r => {
        const date = reviewsAr.find(r2 => r2._id === r).date
        return {
            "_id": r,
            date,
            "type": "review"
        }
    });
    console.log(userReviews)
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
    console.log(userComments)

    const overviewList = [...userReviews, ...userFavorites, ...userNewSongs, ...userComments];
    overviewList.sort(function (a, b) {
        return b.date - a.date;
    });
    return (
        <div className="wd-black-bg">
            {overviewList.map(activityItem => (<RecentActivityItem activityItem={activityItem}/>))}
        </div>
    );
}

export default RecentActivityList;
