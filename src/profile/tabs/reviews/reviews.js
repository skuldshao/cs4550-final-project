import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import reviewArray from "./reviews.json"
import ProfileHeaderEdit from "../../loggedInProfile/profile-header-edit";
import ProfileHeader from "../../loggedInProfile/profile-header";
import WhoseProfile from "../../view-profile/whose-profile";

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
    return (
        <div>
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                {reviewArray.map(reviewItem => <ReviewItem reviewItem={reviewItem}/>)}
            </div>
        </div>
    );
}

export default Reviews