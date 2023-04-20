import React from "react";
import {Routes, Route} from "react-router";
import Self from "../loggedInProfile/selfNoEdit";

function ProfileTabs({isEditing = false, isSelf = false, loggedIn = true}) {
    return (
        <Routes>
            <Route path="/*"
                   element={<Self tabs={{active: "overview"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
            <Route path="reviews/*"
                   element={<Self tabs={{active: "reviews"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
            <Route path="following/*"
                   element={<Self tabs={{active: "following"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
            <Route path="followers/*"
                   element={<Self tabs={{active: "followers"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
            <Route path="favoriteSongs/*"
                   element={<Self tabs={{active: "favoriteSongs"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
            <Route path="newSongs/*"
                   element={<Self tabs={{active: "newSongs"}} isEditing={isEditing} isSelf={isSelf}
                                  loggedIn={loggedIn}/>}/>
        </Routes>
    );
}

export default ProfileTabs

