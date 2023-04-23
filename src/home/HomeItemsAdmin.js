import React from "react";
import reviewsAr from "../data/reviews.json";
import {HomeList} from "./home-list";

export const HomeItemsAdmin = ({users, admins}) => {
    let overviewList = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const reviews = user.reviews;
        const favorites = user.favoriteSongs;
        const newSongs = user.newSongs;
        const comments = user.comments;
        const userReviews = reviews.map(r => {
            return {
                ...r,
                "type": "review",
                "user": user
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
            "user": user,
            "kind": "user"
        };
        overviewList = [...overviewList, ...userReviews, ...userFavorites, ...userNewSongs, ...userComments, joined];
    }
    for (let i = 0; i < admins.length; i++) {
        const admin = admins[i];
        const joined = {
            "date": admin.joined,
            "type": "joined",
            "user": admin,
            "kind": "admin"
        };
        overviewList = [...overviewList, joined]
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