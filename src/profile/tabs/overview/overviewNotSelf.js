import React from "react";
import OverView from "./overview";


function OverViewNotSelf({tabs, user }
) {
    return (
        <OverView tabs={tabs} isSelf={false} isEditing={false} user={user}/>
    );
}

export default OverViewNotSelf
