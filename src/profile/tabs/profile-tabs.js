import React from "react";
import {Routes, Route} from "react-router";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";
import Following from "./follow/following";
import Followers from "./follow/followers";
import ListenToMore from "./playlists/listenToMore";
import Favorites from "./playlists/favorites";

function ProfileTabs( { isEditing = false } ) {
    return (
                <Routes>
                    <Route index
                           element={<Overview tabs={{ active: "overview" }} isEditing={isEditing}/>}/>
                    <Route path="reviews"
                           element={<Reviews tabs={{ active: "reviews" }} isEditing={isEditing}/>}/>
                    <Route path="following"
                           element={<Following tabs={{ active: "following" }} isEditing={isEditing}/>}/>
                    <Route path="followers"
                           element={<Followers tabs={{ active: "followers" }} isEditing={isEditing}/>}/>
                    <Route path="favoriteSongs"
                           element={<Favorites tabs={{ active: "favoriteSongs" }} isEditing={isEditing}/>}/>
                    <Route path="newSongs"
                           element={<ListenToMore tabs={{ active: "newSongs" }} isEditing={isEditing}/>}/>
                </Routes>
    );
}

export default ProfileTabs

