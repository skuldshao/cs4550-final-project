import {useEffect, useState} from "react";
import * as userService from "../services/user-service";
import reviewsAr from "../data/reviews.json";

const HomeItemsUser = ({uid}) => {
    // const [user, setUser] = useState({});
    // const getUserByUsername = async () => {
    //     const user = await userService.findUserById(uid);
    //     console.log(user);
    //     setUser(user);
    // };
    // useEffect(() => {
    //     getUserByUsername();
    // }, []);
    // let overviewList = [];
    // const reviews = user.reviews;
    // const favorites = user.favoriteSongs;
    // const newSongs = user.newSongs;
    // const comments = user.comments;
    // const userReviews = reviews.map(r => {
    //     const nx = reviewsAr.findIndex(r2 => r2._id === r)
    //     if (nx !== -1) {
    //         const nx = reviewsAr.findIndex(r2 => r2._id === r)
    //         if (nx !== -1) {
    //             const date = reviewsAr.find(r2 => r2._id === r).date
    //             return {
    //                 "_id": r,
    //                 date,
    //                 "type": "review",
    //                 "user": user
    //             }
    //         } else {
    //             return {
    //                 "_id": r,
    //                 "date": Date.now(),
    //                 "type": "review",
    //                 "user": user
    //             }
    //         }
    //     } else {
    //         return {
    //             "_id": r,
    //             "date": Date.now(),
    //             "type": "review",
    //             "user": user
    //         }
    //     }
    // });
    // const userFavorites = favorites.map(r => {
    //     return {
    //         ...r,
    //         "type": "favorites",
    //         "user": user
    //     }
    // });
    // const userNewSongs = newSongs.map(r => {
    //     return {
    //         ...r,
    //         "type": "newSongs",
    //         "user": user
    //     }
    // });
    // const userComments = comments.map(r => {
    //     return {
    //         ...r,
    //         "type": "comments",
    //         "user": user
    //     }
    // });
    // const joined = {
    //     "date": user.joined,
    //     "type": "joined",
    //     "user": user,
    //     "kind": "user"
    // };
    // overviewList = [...overviewList, ...userReviews, ...userFavorites, ...userNewSongs, ...userComments, joined];
    // overviewList.sort(function (a, b) {
    //     return b.date - a.date;
    // });
    return (
        <div>
            Will Load once current user session data is stored
        </div>
    )
}
export default HomeItemsUser