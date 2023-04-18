import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import ViewProfileAsAdmin from "../../admin/viewProfileAsAdmin";

function ReviewsAdmin({
                          user = {
                              "userName": "SpaceX",
                              "_id": 5,
                              "handle": "2h",
                              "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                              "number": "tesla.png",
                              "email": "blah"
                          }, tabs
                      }) {
    const reviews = user.reviews
    return (
        <div>
            <div className="wd-black-bg text-start">
                <ViewProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
                {reviews.length > 0 ?
                    reviews.map(rid => <ReviewItem reviewItem={rid} date={true}/>) :
                    (<span
                        className="d-flex justify-content-start text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has not left any reviews!</span>)
                }
            </div>
        </div>
    );
}

export default ReviewsAdmin