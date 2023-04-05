import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import reviewArray from "./reviews.json"
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";

function Reviews( {
      who = {
          "isSelf": true,
          "userName": "SpaceX",
          "handle": "2h",
          "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
          "phoneNumber": "tesla.png",
          "email": "blah"
      }, tabs, isEditing } ) {
    return (
        <div className="row wd-black-bg">
            {isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>}
            <NavTab tabs={tabs} isEditing={isEditing}/>
            {reviewArray.map(reviewItem => <ReviewItem reviewItem={reviewItem}/>)}
        </div>
    );
}

export default Reviews