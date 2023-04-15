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
                <div className="row ms-5 mt-3">
                    <div className="col-xl-6 col-sm-7 col-8 text-white">
                        <p className="fw-bold fs-5">RECENT ACTIVITY</p>
                        <RecentActivityList user={user}/>
                    </div>
                    <div className="col-xl-6 col-sm-5 col-4 text-white">
                        <About isEditing={false} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverViewAdmin