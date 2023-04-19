import React, {useEffect, useState} from "react";
import NavTab from "../../tab-nav";
import ViewProfileAsAdmin from "../../../admin/viewProfileAsAdmin";
import FollowItemAdmin from "../followItemAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserFollowersById} from "../../../../services/user-service";
import {findUserFollowersByIdThunk} from "../../../../services/user-thunk";

function FollowersAdmin(
    {
        uid, tabs, user, followers
    }
) {
    // const dispatch = useDispatch();
    // const {followers} = useSelector(state => state.userData)
    // useEffect(() => {
    //     console.log("thisone")
    //     dispatch(findUserFollowersByIdThunk(uid))
    // }, [])
    console.log(followers)
    return (
        <div className="wd-black-bg text-start">
            <ViewProfileAsAdmin active={tabs.active} user={user}/>
            <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
            <div className="wd-black-bg align-items-center">
                {followers.length === 0 ? (<span
                        className=" d-flex justify-content-start text-white ms-5 fw-normal fs-5 mt-3 mb-3">{user.userName} has no followers</span>) :
                    (followers.followers).map(followerItem => <FollowItemAdmin fid={followerItem} pUser={user}
                                                                               tab={"followers"}/>)}
            </div>
        </div>
    );
}

export default FollowersAdmin