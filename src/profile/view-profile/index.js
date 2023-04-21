import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, findUserThunk} from "../../services/user-thunk";
import NavTab from "../tabs/tab-nav";
import RecentActivityList from "../tabs/overview/recentActivityList";
import About from "../tabs/overview/about";
import ReviewItem from "../tabs/reviews/reviewItem";
import FollowItem from "../tabs/follow/followItem";
import PlaylistItem from "../tabs/playlists/playlistItem";
import WhoseProfile from "./whose-profile";

const ViewProfile = ({tabs, loggedIn}) => {
    const {uid} = useParams();
    const {users, display} = useSelector((state) => state.userData)
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const dispatch = useDispatch();
    const thiss = async () => {
        const thing = await dispatch(findUserByIdThunk(uid))
        setProfile(thing.payload)
        setLoading(false)
    }
    useEffect(() => {
        thiss()
        dispatch(findUserThunk())
    }, []);
    return (
        <div className="text-white">
            {loading && <div>LOADING DATA</div>}
            {(!loading && display) &&
            <div className="wd-black-bg text-start">
                <WhoseProfile uid={uid} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={profile} isSelf={false}
                        followers={users.find(u => u._id === uid).followers.length}
                        following={users.find(u => u._id === uid).following.length}/>
                {tabs.active === "overview" && <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={profile} isSelf={false}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={false} user={profile}/>
                    </div>
                </div>}
                {tabs.active === "reviews" && <div>
                    {profile.reviews.length > 0 ?
                        profile.reviews.map(rid => <ReviewItem reviewItem={rid}
                                                               date={true}/>) :
                        (<span
                            className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has not left any reviews!</span>)
                    }
                </div>}
                {tabs.active === "following" && <div className="wd-black-bg align-items-center">
                    {users.find(u => u._id === uid).following.length === 0 ? (<span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-1">{profile.userName} is not following anyone</span>) :
                        users.find(u => u._id === uid).following.map(followingItem => <FollowItem fid={followingItem}
                                                                                                  loggedIn={loggedIn}
                                                                                                  isEditing={false}/>)}
                </div>}
                {tabs.active === "followers" && <div className="wd-black-bg align-items-center">
                    {users.find(u => u._id === uid).followers.length === 0 ? (<span
                            className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{profile.userName} has no followers</span>) :
                        users.find(u => u._id === uid).followers.map(followerItem => <FollowItem fid={followerItem}
                                                                                                 loggedIn={loggedIn}
                                                                                                 isEditing={false}/>)}
                </div>}
                {tabs.active === "favoriteSongs" && <div>
                    {
                        profile.favoriteSongs.length > 0 ? profile.favoriteSongs.map(f =>
                                <PlaylistItem
                                    item={f}/>) :
                            (<span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has no songs in their favorites playlist</span>)
                    }
                </div>}
                {tabs.active === "newSongs" && <div>
                    {
                        profile.newSongs.length > 0 ? profile.newSongs.map(f =>
                                <PlaylistItem
                                    item={f}/>) :
                            (<span
                                className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{profile.userName} has no songs in their new songs playlist</span>)
                    }
                </div>}
            </div>
            }
        </div>
    );
}
export default ViewProfile;