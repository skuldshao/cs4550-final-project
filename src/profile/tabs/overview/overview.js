import React from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import WhoseProfile from "../../view-profile/whose-profile";


function OverView( {tabs, isEditing, isSelf, user = {
    "userName": "SpaceX",
    "_id": 5,
    "handle": "2h",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "number": "89977",
    "email": "blah",
    "following": [],
    "followers": []}, currentUser = {
    "userName": "SpaceX",
    "_id": 5,
    "handle": "2h",
    "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
    "number": "879876",
    "email": "blah",
    "following": [],
    "followers": []}}
) {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                {!isSelf ?  <WhoseProfile user={user} currentUser={currentUser}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
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
