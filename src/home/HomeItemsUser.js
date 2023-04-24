import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {HomeList} from "./home-list";

const HomeItemsUser = ({users}) => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [newUsers, setUsers] = useState([]);
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        const following = user.payload.following;
        const followedUsers = users.filter(u => following.includes(u._id))
        setUsers([...followedUsers, user.payload])
        setLoading(false)

    };
    useEffect(() => {
        dispatch(userProfileThunk())
        getUserProfile();
    }, []);

    let overviewList = [];
    for (let i = 0; i < newUsers.length; i++) {
        const user = newUsers[i];
        const reviews = user.reviews;
        console.log("reviews")
        console.log(reviews)
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
    overviewList.sort(function (a, b) {
        return b.date - a.date;
    });
    return (
        <div className="wd-black-bg">
            <ul className="list-group">
                {!loading &&
                (overviewList.length > 0 && overviewList.map(activityItem => (
                    <HomeList activityItem={activityItem} currentID={profile._id}/>)))
                }
            </ul>
        </div>
    )
}
export default HomeItemsUser