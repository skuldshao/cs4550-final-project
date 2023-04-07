import React from "react";
import Followers from "./followers";

function FollowerSelfNoEdit(
    { user = {
        "isSelf": true,
        "userName": "SpaceX",
        "handle": "2h",
        "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
        "phoneNumber": "tesla.png",
        "email": "blah"
    }, tabs }
) {
    return (
        <div>
            <Followers tabs={tabs} isEditing={false} isSelf={true}/>
        </div>
    );
}

export default FollowerSelfNoEdit