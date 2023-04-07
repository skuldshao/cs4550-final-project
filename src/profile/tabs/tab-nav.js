import React from "react";
import {Link} from "react-router-dom";
import followerArray from "./follow/followers.json";
import followingArray from "./follow/following.json"

function NavTab(
    {tabs, isEditing, userID, isSelf}
) {
    return (
        <ul className="nav nav-tabs p-0 pt-2 mt-3 border-none border-0 ps-5">
            <li className="nav-item pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile` : `/profile/${userID}`}
                          className={`${ isEditing ? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                              tabs.active === "overview"? `border-danger` : `border-secondary`}`}>OVERVIEW</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile/reviews` : `/profile/reviews/${userID}`} className={`${ isEditing ? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active === "reviews"? `border-danger` : `border-secondary`}`} >REVIEWS</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile/favoriteSongs` : `/profile/favoriteSongs/${userID}`} className={`${ isEditing? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active === "favoriteSongs"? `border-danger` : `border-secondary`}`}>FAVORITES</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile/newSongs` : `/profile/newSongs/${userID}`} className={`${ isEditing? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active === "newSongs"? `border-danger` : `border-secondary`}`}>NEW SONGS</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile/following` : `/profile/following/${userID}`} className={`${ isEditing? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active === "following"? `border-danger` : `border-secondary`}`}>FOLLOWING ({followingArray.length})</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className={`nav-link ${ isEditing? `disabled` : ``}`}>
                    <Link to={isSelf ? `/profile/followers` : `/profile/followers/${userID}`} className={`${ isEditing? `text-secondary` : `text-white`} fw-bold text-decoration-none pb-2 border-bottom border-2 ${
                        tabs.active === "followers"? `border-danger` : `border-secondary`}`}>FOLLOWERS ({followerArray.length})</Link>
                </div>
            </li>
        </ul>
    );
}

export default NavTab
