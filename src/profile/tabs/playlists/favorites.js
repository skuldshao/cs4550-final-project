import Nav from "../../../nav";
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import NavTab from "../tab-nav";
import React from "react";

const Favorites = ({tabs, isEditing }) => {
    return (
        <div>
            <Nav active="profile" user="user"/>
            <div className="row wd-black-bg text-start">
                {isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>}
                <NavTab tabs={tabs} isEditing={isEditing}/>
            </div>
        </div>
    )
}

export default Favorites;