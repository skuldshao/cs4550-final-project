import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import React from "react";
import ViewProfileAsAdmin from "../../admin/viewProfileAsAdmin";
import EditProfileAsAdmin from "../../admin/editProfileAsAdmin";

const OverViewAdmin = ({tabs, user, isEditing, following, followers}) => {
    return (
        <div>
            <div className="wd-black-bg text-start">
                {isEditing ? <EditProfileAsAdmin active={tabs.active} user={user}/> :
                    <ViewProfileAsAdmin active={tabs.active} user={user}/>}
                <NavTab tabs={tabs} isEditing={isEditing} user={user} isSelf={false} following={following}
                        followers={followers}/>
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user} isSelf={false}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={isEditing} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverViewAdmin