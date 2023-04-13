import React from "react";
import Reviews from "./reviews";

function ReviewsSelfNoEdit({
                               user = {
                                   "userName": "SpaceX",
                                   "handle": "2h",
                                   "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                   "number": "7889755",
                                   "email": "blah",
                                   "following": [],
                                   "followers": [],
                                   "reviews": []
                               }, tabs
                           }) {
    return (
        <div>
            <Reviews tabs={tabs} isEditing={false} isSelf={true} user={user}/>
        </div>
    );
}

export default ReviewsSelfNoEdit