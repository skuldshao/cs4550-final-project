import {useParams} from "react-router";
import OverViewNotSelf from "../tabs/overview/overviewNotSelf";
import React, {useEffect, useState} from "react";
import ReviewsNotSelf from "../tabs/reviews/reviewsNotSelf";
import FollowingNotSelf from "../tabs/follow/following/followingNotSelf";
import FollowersNotSelf from "../tabs/follow/followers/followersNotSelf";
import FavoritesNotSelf from "../tabs/playlists/favorites/favoritesNotSelf";
import ListenToMoreNotSelf from "../tabs/playlists/listenToMore/listenToMoreNotSelf";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../services/user-thunk";
import {profileThunk as userProfileThunk} from "../../services/user-auth-thunk";
import ProfileHeaderEdit from "../loggedInProfile/profile-header-edit";
import ProfileHeader from "../loggedInProfile/profile-header";
import NavTab from "../tabs/tab-nav";
import RecentActivityList from "../tabs/overview/recentActivityList";
import About from "../tabs/overview/about";
import ReviewItem from "../tabs/reviews/reviewItem";
import FollowItem from "../tabs/follow/followItem";
import PlaylistItem from "../tabs/playlists/playlistItem";
import WhoseProfile from "./whose-profile";

const ViewProfile = ({tabs, loggedIn}) => {
    // const {uid} = useParams();
    // const {foundUser, loading, displayFoundUser} = useSelector((state) => state.userData)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(findUserByIdThunk(uid))
    // }, [uid]);
    // return (
    //     <div className="text-white">
    //         {loading && <div>LOADING DATA</div>}
    //         {(tabs.active === "overview" && displayFoundUser) &&
    //         <OverViewNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //         {(tabs.active === "reviews" && displayFoundUser) &&
    //         <ReviewsNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //         {(tabs.active === "following" && displayFoundUser) &&
    //         <FollowingNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //         {(tabs.active === "followers" && displayFoundUser) &&
    //         <FollowersNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //         {(tabs.active === "favoriteSongs" && displayFoundUser) &&
    //         <FavoritesNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //         {(tabs.active === "newSongs" && displayFoundUser) &&
    //         <ListenToMoreNotSelf tabs={tabs} user={foundUser} loggedIn={loggedIn}/>}
    //     </div>
    // )

    const {uid} = useParams();
    const {foundUser, loading, displayFoundUser, users, display} = useSelector((state) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
    }, [uid]);
    useEffect(() => {
        dispatch(findUserThunk())
    }, []);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(!loading && displayFoundUser && display) &&
            <div className="wd-black-bg text-start">
                <WhoseProfile uid={uid} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={foundUser} isSelf={false}
                        followers={(users.find(u => u._id === uid)).followers.length}
                        following={(users.find(u => u._id === uid)).following.length}/>
                {tabs.active === "overview" && <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={foundUser} isSelf={false}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={false} user={foundUser}/>
                    </div>
                </div>}
                {tabs.active === "reviews" && <div>
                    {foundUser.reviews.length > 0 ?
                        foundUser.reviews.map(rid => <ReviewItem reviewItem={rid} date={true}/>) :
                        (<span
                            className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{foundUser.userName} has not left any reviews!</span>)
                    }
                </div>}
                {tabs.active === "following" && <div className="wd-black-bg align-items-center">
                    {(users.find(u => u._id === uid)).following.length === 0 ? (<span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{foundUser.userName} is not following anyone</span>) :
                        (users.find(u => u._id === uid)).following.map(followingItem => <FollowItem fid={followingItem}
                                                                                                    loggedIn={loggedIn}
                                                                                                    isEditing={false}/>)}
                </div>}
                {tabs.active === "followers" && <div className="wd-black-bg align-items-center">
                    {(users.find(u => u._id === uid)).followers.length === 0 ? (<span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{foundUser.userName} has no followers</span>) :
                        (users.find(u => u._id === uid)).followers.map(followerItem => <FollowItem fid={followerItem}
                                                                                                   loggedIn={loggedIn}
                                                                                                   isEditing={false}/>)}
                </div>}
                {tabs.active === "favoriteSongs" && <div>
                    {
                        foundUser.favoriteSongs.length > 0 ? foundUser.favoriteSongs.map(f => <PlaylistItem
                                item={f}/>) :
                            (<span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{foundUser.userName} has no songs in their favorites playlist</span>)
                    }
                </div>}
                {tabs.active === "newSongs" && <div>
                    {
                        foundUser.newSongs.length > 0 ? foundUser.newSongs.map(f => <PlaylistItem
                                item={f}/>) :
                            (<span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{foundUser.userName} has no songs in their new songs playlist</span>)
                    }
                </div>}
            </div>
            }
        </div>
    );
}
export default ViewProfile;