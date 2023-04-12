import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import ProfileTabs from "./tabs/profile-tabs";
import OverViewSelfNoEdit from "./tabs/overview/overViewSelfNoEdit";
import ReviewsSelfNoEdit from "./tabs/reviews/ReviewsSelfNoEdit";
import FollowingSelfNoEdit from "./tabs/follow/following/followingSelfNoEdit";
import FavoritesSelfNoEdit from "./tabs/playlists/favoritesSelfNoEdit";
import ListenToMoreSelfNoEdit from "./tabs/playlists/listenToMoreSelfNoEdit";
import FollowerSelfNoEdit from "./tabs/follow/followers/followersSelfNoEdit";
import ViewProfile from "./view-profile";
import NotLoggedInProfile from "./notLoggedInProfile";

function ProfileRoute({loggedIn}) {
    return (
        <Routes>
            <Route index
                   element={loggedIn ? <OverViewSelfNoEdit tabs={{active: "overview"}}/> : <NotLoggedInProfile/>}/>
            <Route path="reviews/*"
                   element={<ReviewsSelfNoEdit tabs={{active: "reviews"}}/>}/>
            <Route path="following/*"
                   element={<FollowingSelfNoEdit tabs={{active: "following"}}/>}/>
            <Route path="followers/*"
                   element={<FollowerSelfNoEdit tabs={{active: "followers"}}/>}/>
            <Route path="favoriteSongs/*"
                   element={<FavoritesSelfNoEdit tabs={{active: "favoriteSongs"}}/>}/>
            <Route path="newSongs/*"
                   element={<ListenToMoreSelfNoEdit tabs={{active: "newSongs"}}/>}/>
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
