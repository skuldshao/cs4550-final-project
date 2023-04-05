import React from "react";
import {Routes, Route} from "react-router";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";
import Following from "./follow/following";
import Followers from "./follow/followers";

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
                </Routes>
    );
}

export default ProfileTabs

