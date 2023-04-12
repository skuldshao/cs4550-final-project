import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import reviewArray from "./reviews.json"
import ViewProfileAsAdmin from "../../admin/viewProfileAsAdmin";

function ReviewsAdmin( {
                      user = {
                          "userName": "SpaceX",
                          "_id": 5,
                          "handle": "2h",
                          "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                          "number": "tesla.png",
                          "email": "blah"
                      }, tabs } ) {
    return (
        <div>
            <div className="row wd-black-bg text-start">
                <ViewProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
                {reviewArray.map(reviewItem => <ReviewItem reviewItem={reviewItem}/>)}
            </div>
        </div>
    );
}

export default ReviewsAdmin