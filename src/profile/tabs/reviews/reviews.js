import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import reviewArray from "./reviews.json"
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import WhoseProfile from "../../view-profile/whose-profile";

function Reviews( {
      user = {
          "userName": "SpaceX",
          "_id": 5,
          "handle": "2h",
          "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
          "phoneNumber": "tesla.png",
          "email": "blah"
      }, tabs, isEditing, isSelf, currentUser = {
        "userName": "SpaceX",
        "_id": 5,
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah",
        "following": [],
        "followers": []} } ) {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                {!isSelf ?  <WhoseProfile user={user} currentUser={currentUser}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                {reviewArray.map(reviewItem => <ReviewItem reviewItem={reviewItem}/>)}
            </div>
        </div>
    );
}

export default Reviews