import React from "react";
import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import ProfileHeaderEdit from "../../profile-header-edit";
import ProfileHeader from "../../profile-header";
import Nav from "../../../nav";


function OverView( {tabs, isEditing }
) {
    return (
        <div>
            <Nav active="profile" user="user"/>
            <div className="row wd-black-bg text-start">
                {isEditing ? <ProfileHeaderEdit active={tabs.active}/> : <ProfileHeader active={tabs.active}/>}
                <NavTab tabs={tabs} isEditing={isEditing}/>
                <div className="row ps-5 pt-4">
                    <div className="col-9 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList/>
                    </div>
                    <div className="col-3 text-white">
                        <p className="fw-bold fs-5">ABOUT</p>
                        <About isEditing={isEditing}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView
