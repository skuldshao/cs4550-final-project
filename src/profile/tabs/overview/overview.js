import React from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import WhoseProfile from "../../view-profile/whose-profile";


function OverView({
                      tabs, isEditing, isSelf, user = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "89977",
        "email": "blah",
        "following": [],
        "followers": [],
        "comments": [{"date": 1681407290, "reviewID": 1, "comment": "I totally agree!"}],
        "reviews": [],
        "favoriteSongs": [],
        "newSongs": []
    }, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "number": "879876",
        "email": "blah",
        "following": [],
        "followers": []
    }, loggedIn
                  }
) {
    return (
        <div>
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={isEditing} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView
