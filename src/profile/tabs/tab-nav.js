import React from "react";
import {Link} from "react-router-dom";


function NavTab(
    {tabs}
) {
    return (
        <ul className="nav nav-tabs p-0 pt-2 border-none border-0">
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/"
                          className={`text-white fw-bold text-decoration-none pb-2 ${
                              tabs.active == "overview"? `border-bottom border-danger border-2` : ``}`}>OVERVIEW</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/reviews" className={`text-white fw-bold text-decoration-none pb-2 ${
                        tabs.active == "reviews"? `border-bottom border-danger` : ``}`}>REVIEWS</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/following" className={`text-white fw-bold text-decoration-none pb-2 ${
                        tabs.active == "following"? `border-bottom border-danger` : ``}`}>FOLLOWING</Link>
                </div>
            </li>
            <li className="nav-item ps-2 pe-2">
                <div className="nav-link">
                    <Link to="/followers" className={`text-white fw-bold text-decoration-none pb-2 ${
                        tabs.active == "followers"? `border-bottom border-danger` : ``}`}>FOLLOWERS</Link>
                </div>
            </li>
        </ul>
    );
}

export default NavTab
