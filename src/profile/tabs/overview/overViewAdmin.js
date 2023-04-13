import NavTab from "../tab-nav";
import RecentActivityList from "./recentActivityList";
import About from "./about";
import React from "react";
import ViewProfileAsAdmin from "../../admin/viewProfileAsAdmin";

const OverViewAdmin = ({tabs, user}) => {
    return (
        <div>
            <div className="wd-black-bg text-start">
                <ViewProfileAsAdmin active={tabs.active} user={user}/>
                <NavTab tabs={tabs} isEditing={false} user={user} isSelf={false}/>
                <div className="row ps-5 pt-4">
                    <div className="col-9 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList/>
                    </div>
                    <div className="col-3 text-white">
                        <p className="fw-bold fs-5">ABOUT</p>
                        <About isEditing={false} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverViewAdmin