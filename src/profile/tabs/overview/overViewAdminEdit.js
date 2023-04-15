import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import React from "react";
import EditProfileAsAdmin from "../../admin/editProfileAsAdmin";

const OverViewAdminEdit = ({tabs, user}) => {
    return (
        <div>
            <div className="wd-black-bg text-start">
                <EditProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={true} user={user} isSelf={false}/>
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user} isSelf={false}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={true} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverViewAdminEdit