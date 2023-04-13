import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
import EditProfileAsAdmin from "../../admin/editProfileAsAdmin";

function ReviewsAdminEdit({
                              user = {
                                  "userName": "SpaceX",
                                  "_id": 5,
                                  "handle": "2h",
                                  "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                  "number": "tesla.png",
                                  "email": "blah",
                                  "reviews": [],
                              }, tabs
                          }) {
    const reviews = user.reviews;
    return (
        <div>
            <div className="row wd-black-bg text-start">
                <EditProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={true} user={user} isSelf={false}/>
                {reviews.length > 0 ?
                    reviews.map(rid => <ReviewItem reviewItem={rid}/>) :
                    (<span
                        className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has not left any reviews!</span>)
                }
            </div>
        </div>
    );
}

export default ReviewsAdminEdit