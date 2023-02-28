import React from "react";
import {Link} from "react-router-dom";
import followerArray from "./follow/followers.json";
import followingArray from "./follow/following.json"

function NavTab(
    {tabs}
) {
    return (
        <ul className="nav nav-tabs p-0 pt-2 border-none border-0">
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/"
                          className={`text-white fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                              tabs.active == "overview"? `border-danger` : `border-secondary`}`}>OVERVIEW</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/reviews" className={`text-white fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active == "reviews"? `border-danger` : `border-secondary`}`}>REVIEWS</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/following" className={`text-white fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active == "following"? `border-danger` : `border-secondary`}`}>FOLLOWING ({followingArray.length})</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/followers" className={`text-white fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active == "followers"? `border-danger` : `border-secondary`}`}>FOLLOWERS ({followerArray.length})</Link>
                </div>
            </li>
        </ul>
    );
}

export default NavTab
