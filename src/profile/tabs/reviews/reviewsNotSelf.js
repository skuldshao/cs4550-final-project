import React, {useEffect, useState} from "react";
import Reviews from "./reviews";
import {useDispatch} from "react-redux";
import {profileThunk as userProfileThunk} from "../../../services/user-auth-thunk";
import WhoseProfile from "../../view-profile/whose-profile";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";

function ReviewsNotSelf({
                            tabs, loggedIn, user
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
                <WhoseProfile uid={user._id} loggedIn={loggedIn}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}
                        followers={user.followers.length} following={user.following.length}/>
                {user.reviews.length > 0 ?
                    profile.reviews.map(rid => <ReviewItem reviewItem={rid} date={true}/>) :
                    <span
                        className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has not left any reviews!</span>
                }
            </div>}
        </div>
    );
}

export default ReviewsNotSelf