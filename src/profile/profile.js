
import React from "react";
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import ProfileTabs from "./tabs/profile-tabs";
import OverViewSelfNoEdit from "./tabs/overview/overViewSelfNoEdit";
import ReviewsSelfNoEdit from "./tabs/reviews/ReviewsSelfNoEdit";
import FollowingSelfNoEdit from "./tabs/follow/followingSelfNoEdit";
import FavoritesSelfNoEdit from "./tabs/playlists/favoritesSelfNoEdit";
import ListenToMoreSelfNoEdit from "./tabs/playlists/listenToMoreSelfNoEdit";
import FollowerSelfNoEdit from "./tabs/follow/followersSelfNoEdit";
import ViewProfile from "./view-profile";

function ProfileRoute() {
    return (
        <Routes>
            <Route index
                   element={<OverViewSelfNoEdit tabs={{ active: "overview" }}/>}/>
            <Route path="reviews/*"
                   element={<ReviewsSelfNoEdit tabs={{ active: "reviews" }}/>}/>
            <Route path="following/*"
                   element={<FollowingSelfNoEdit tabs={{ active: "following" }}/>}/>
            <Route path="followers/*"
                   element={<FollowerSelfNoEdit tabs={{ active: "followers" }}/>}/>
            <Route path="favoriteSongs/*"
                   element={<FavoritesSelfNoEdit tabs={{ active: "favoriteSongs" }}/>}/>
            <Route path="newSongs/*"
                   element={<ListenToMoreSelfNoEdit tabs={{ active: "newSongs" }}/>}/>
            <Route path="edit/*" element={<ProfileTabs isEditing={true} isSelf={true}/>}/>
            <Route path=":uid"
                   element={<ViewProfile tabs={{ active: "overview" }}/>}/>
            <Route path="reviews/:uid"
                   element={<ViewProfile tabs={{ active: "reviews" }}/>}/>
            <Route path="following/:uid"
                   element={<ViewProfile tabs={{ active: "following" }}/>}/>
            <Route path="followers/:uid"
                   element={<ViewProfile tabs={{ active: "followers" }}/>}/>
            <Route path="favoriteSongs/:uid"
                   element={<ViewProfile tabs={{ active: "favoriteSongs" }}/>}/>
            <Route path="newSongs/:uid"
                   element={<ViewProfile tabs={{ active: "newSongs" }}/>}/>
        </Routes>
    );
}
export default ProfileRoute;
