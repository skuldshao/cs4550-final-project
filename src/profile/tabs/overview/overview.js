import React from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import WhoseProfile from "../../view-profile/whose-profile";


function OverView( {tabs, isEditing, isSelf, user = {
    "userName": "SpaceX",
    "_id": 5,
    "handle": "2h",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "phoneNumber": "tesla.png",
    "email": "blah" }}
) {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                {!isSelf ?  <WhoseProfile user={user}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} userID={user._id} isSelf={isSelf}/>
                <div className="row ps-5 pt-4">
                    <div className="col-9 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList/>
                    </div>
                    <div className="col-3 text-white">
                        <p className="fw-bold fs-5">ABOUT</p>
                        <About isEditing={isEditing}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView
