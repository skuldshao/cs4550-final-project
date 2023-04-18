import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findUserThunk} from "../services/user-thunk";
import {findAdminThunk} from "../services/admin-thunk";
import reviewsAr from "../data/reviews.json";
import RecentActivityItem from "../profile/tabs/overview/recentActivityItem";
import {HomeList} from "./home-list";

export const HomeItemsAdmin = ({users}) => {
    let overviewList = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
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
        const userFavorites = favorites.map(r => {
            return {
                ...r,
                "type": "favorites",
                "user": user
            }
        });
        const userNewSongs = newSongs.map(r => {
            return {
                ...r,
                "type": "newSongs",
                "user": user
            }
        });
        const userComments = comments.map(r => {
            return {
                ...r,
                "type": "comments",
                "user": user
            }
        });
        const joined = {
            "date": user.joined,
            "type": "joined",
            "user": user
        };
        overviewList = [...overviewList, ...userReviews, ...userFavorites, ...userNewSongs, ...userComments, joined];
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