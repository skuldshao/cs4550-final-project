import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import ProfileTabs from "./tabs/profile-tabs";
import ViewProfile from "./view-profile";
import NotLoggedInProfile from "./notLoggedInProfile";
import Self from "./loggedInProfile/selfNoEdit";

function ProfileRoute({loggedIn}) {
        return (
            <Routes>
                    <Route index
                           element={loggedIn ?
                               <Self tabs={{active: "overview"}} isEditing={false} isSelf={true} loggedIn={true}/> :
                               <NotLoggedInProfile/>}/>
                    <Route path="reviews/*"
                           element={<Self tabs={{active: "reviews"}} isEditing={false} isSelf={true}
                                          loggedIn={true}/>}/>
                    <Route path="following/*"
                           element={<Self tabs={{active: "following"}} isEditing={false} isSelf={true}
                                          loggedIn={true}/>}/>
                    <Route path="followers/*"
                           element={<Self tabs={{active: "followers"}} isEditing={false} isSelf={true}
                                          loggedIn={true}/>}/>
                    <Route path="favoriteSongs/*"
                           element={<Self tabs={{active: "favoriteSongs"}} isEditing={false} isSelf={true}
                                          loggedIn={true}/>}/>
                    <Route path="newSongs/*"
                           element={<Self tabs={{active: "newSongs"}} isEditing={false} isSelf={true}
                                          loggedIn={true}/>}/>
                    <Route path="edit/*" element={<ProfileTabs isEditing={true} isSelf={true}/>}/>
                    <Route path=":uid"
                           element={<ViewProfile tabs={{active: "overview"}} loggedIn={loggedIn}/>}/>
                    <Route path="reviews/:uid"
                           element={<ViewProfile tabs={{active: "reviews"}} loggedIn={loggedIn}/>}/>
                    <Route path="following/:uid"
                           element={<ViewProfile tabs={{active: "following"}} loggedIn={loggedIn}/>}/>
                    <Route path="followers/:uid"
                           element={<ViewProfile tabs={{active: "followers"}} loggedIn={loggedIn}/>}/>
                    <Route path="favoriteSongs/:uid"
                           element={<ViewProfile tabs={{active: "favoriteSongs"}} loggedIn={loggedIn}/>}/>
                    <Route path="newSongs/:uid"
                           element={<ViewProfile tabs={{active: "newSongs"}} loggedIn={loggedIn}/>}/>
            </Routes>
        );
}

export default ProfileRoute;
