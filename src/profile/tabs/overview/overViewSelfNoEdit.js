import React from "react";
import OverView from "./overview";


function OverViewSelfNoEdit({tabs, userName = "SpaceX" }
) {
    return (
        <OverView tabs={tabs} userName={userName} isSelf={true} isEditing={false}/>
    );
}

export default OverViewSelfNoEdit
