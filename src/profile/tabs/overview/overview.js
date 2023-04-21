import React, {useEffect, useState} from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import WhoseProfile from "../../view-profile/whose-profile";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../services/user-auth-thunk";


function OverView({
                      tabs, isEditing, isSelf, user, currentUser, loggedIn
                  }
) {
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
                {(isEditing ? <ProfileHeaderEdit active={tabs.active}/> :
                    <ProfileHeader active={tabs.active} profile={profile}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}
                        followers={user.followers.length}
                        following={user.following.length}/>
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user} isSelf={isSelf}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={isEditing} user={user}/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default OverView
