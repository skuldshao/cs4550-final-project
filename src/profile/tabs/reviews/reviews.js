import React, {useEffect, useState} from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import WhoseProfile from "../../view-profile/whose-profile";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../services/user-auth-thunk";

function Reviews({
                     user = {
                         "userName": "SpaceX",
                         "_id": 5,
                         "handle": "2h",
                         "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                         "number": "tesla.png",
                         "email": "blah",
                         "following": [],
                         "followers": [],
                         "reviews": [],
                     }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "tesla.png",
        "email": "blah",
        "following": [],
        "followers": []
    }, loggedIn
                 }) {
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
            {!loading && <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> :
                        <ProfileHeader active={tabs.active} profile={profile}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}
                        followers={profile.followers.length} following={profile.following.length}/>
                {profile.reviews.length > 0 ?
                    profile.reviews.map(rid => <ReviewItem reviewItem={rid} date={true}/>) :
                    (isSelf ?
                        <span className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have not made any reviews!</span> :
                        <span
                            className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has not left any reviews!</span>)
                }
            </div>}
        </div>
    );
}

export default Reviews