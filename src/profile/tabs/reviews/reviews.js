import React from "react";
import NavTab from "../tab-nav";
import ReviewItem from "./reviewItem";
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
                         "reviews": [],
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
    const reviews = user.reviews;
    return (
        <div>
            <div className="wd-black-bg text-start">
                {!isSelf ? <WhoseProfile user={user} currentUser={currentUser} loggedIn={loggedIn}/> :
                    (isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>)}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={isSelf}/>
                {reviews.length > 0 ?
                    reviews.map(rid => <ReviewItem reviewItem={rid}/>) :
                    (isSelf ? <span className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">You have not made any reviews!</span> :
                        <span
                            className="d-flex justify-content-center text-white ms-5 fw-normal mt-3 mb-3 fs-5">{user.userName} has not left any reviews!</span>)
                }
            </div>
        </div>
    );
}

export default Reviews