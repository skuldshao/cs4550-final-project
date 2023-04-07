import React from "react";
import Reviews from "./reviews";

function ReviewsNotSelf( {
                    user = {
                        "userName": "SpaceX",
                        "handle": "2h",
                        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                        "phoneNumber": "tesla.png",
                        "email": "blah"
                    }, tabs } ) {

    return (
        <div>
        <Reviews tabs={tabs} isEditing={false} isSelf={false} user={user}/>
        </div>
    );
}

export default ReviewsNotSelf