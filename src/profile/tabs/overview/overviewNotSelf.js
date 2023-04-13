import React from "react";
import OverView from "./overview";


function OverViewNotSelf({tabs, user, loggedIn}
) {
    return (
        <OverView tabs={tabs} isSelf={false} isEditing={false} user={user} loggedIn={loggedIn}/>
    );
}

export default OverViewNotSelf
