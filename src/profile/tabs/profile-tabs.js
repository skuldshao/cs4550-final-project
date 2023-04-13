import React from "react";
import {Routes, Route} from "react-router";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";
import Following from "./follow/following/following";
import Followers from "./follow/followers/followers";
import ListenToMore from "./playlists/listenToMore/listenToMore";
import Favorites from "./playlists/favorites/favorites";

function ProfileTabs({isEditing = false, isSelf = false}) {
    return (
        <Routes>
            <Route path="/*"
                   element={<Overview tabs={{active: "overview"}} isEditing={isEditing} isSelf={isSelf}/>}/>
            <Route path="reviews/*"
                   element={<Reviews tabs={{active: "reviews"}} isEditing={isEditing} isSelf={isSelf}/>}/>
            <Route path="following/*"
                   element={<Following tabs={{active: "following"}} isEditing={isEditing} isSelf={isSelf}/>}/>
            <Route path="followers/*"
                   element={<Followers tabs={{active: "followers"}} isEditing={isEditing} isSelf={isSelf}/>}/>
            <Route path="favoriteSongs/*"
                   element={<Favorites tabs={{active: "favoriteSongs"}} isEditing={isEditing} isSelf={isSelf}/>}/>
            <Route path="newSongs/*"
                   element={<ListenToMore tabs={{active: "newSongs"}} isEditing={isEditing} isSelf={isSelf}/>}/>
        </Routes>
    );
}

export default ProfileTabs

