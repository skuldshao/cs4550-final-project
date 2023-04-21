import React, {useEffect, useState} from "react";
import OverView from "./overview";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../services/user-auth-thunk";
import WhoseProfile from "../../view-profile/whose-profile";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";


function OverViewNotSelf({tabs, user, loggedIn}
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
                <WhoseProfile uid={user._id} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}
                        followers={user.followers.length}
                        following={user.following.length}/>
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user} isSelf={false}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={false} user={user}/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default OverViewNotSelf
