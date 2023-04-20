import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../services/user-auth-thunk";
import WhoseProfile from "../view-profile/whose-profile";
import ProfileHeaderEdit from "./profile-header-edit";
import ProfileHeader from "./profile-header";
import NavTab from "../tabs/tab-nav";
import RecentActivityList from "../tabs/overview/recentActivityList";
import About from "../tabs/overview/about";
import ReviewItem from "../tabs/reviews/reviewItem";
import FollowItem from "../tabs/follow/followItem";
import PlaylistItem from "../tabs/playlists/playlistItem";

const Self = ({tabs, isSelf, isEditing, loggedIn}) => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        setLoading(false)
    };
    useEffect(() => {
        dispatch(userProfileThunk())
        getUserProfile();
    }, []);
    return (
        <div>
            {!loading &&
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile uid={profile._id} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> :
                        <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={profile} isSelf={isSelf}
                        followers={profile.followers.length}
                        following={profile.following.length}/>
                {tabs.active === "overview" && <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={profile} isSelf={isSelf}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={isEditing} user={profile}/>
                    </div>
                </div>}
                {tabs.active === "reviews" && <div>
                    {profile.reviews.length > 0 ?
                        profile.reviews.map(rid => <ReviewItem reviewItem={rid} date={true}/>) :
                        (isSelf ?
                            <span className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have not made any reviews!</span> :
                            <span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has not left any reviews!</span>)
                    }
                </div>}
                {tabs.active === "following" && <div className="wd-black-bg align-items-center">
                    {profile.following.length === 0 ? (isSelf ?
                            <span className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">You are not following anyone</span> :
                            <span
                                className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{profile.userName} is not following anyone</span>) :
                        profile.following.map(followingItem => <FollowItem fid={followingItem}
                                                                           loggedIn={loggedIn} isEditing={isEditing}/>)}
                </div>}
                {tabs.active === "followers" && <div className="wd-black-bg align-items-center">
                    {profile.followers.length === 0 ? (isSelf ? <span
                                className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">You have no followers</span> :
                            <span
                                className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{profile.userName} has no followers</span>) :
                        profile.followers.map(followerItem => <FollowItem fid={followerItem}
                                                                          loggedIn={loggedIn} isEditing={isEditing}/>)}
                </div>}
                {tabs.active === "favoriteSongs" && <div>
                    {
                        profile.favoriteSongs.length > 0 ? profile.favoriteSongs.map(f => <PlaylistItem
                                item={f}/>) :
                            (isSelf ? <span
                                    className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have no songs in your favorites playlist</span> :
                                <span
                                    className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has no songs in their favorites playlist</span>)
                    }
                </div>}
                {tabs.active === "newSongs" && <div>
                    {
                        profile.newSongs.length > 0 ? profile.newSongs.map(f => <PlaylistItem
                                item={f}/>) :
                            (isSelf ? <span
                                    className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have no songs in your new songs playlist</span> :
                                <span
                                    className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has no songs in their new songs playlist</span>)
                    }
                </div>}
            </div>
            }
        </div>
    );
}
export default Self