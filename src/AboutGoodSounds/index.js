import Nav from "../nav";
import {HomeItem} from "../home/home-item";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import logoIcon from "../images/logo.png";
import {Link} from "react-router-dom";

const AboutGoodSounds = () => {
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const getProfile = async () => {
        const admins = await dispatch(adminProfileThunk());
        const adVal = admins.type === "adminAuth/profile/fulfilled"
        setAdmin(adVal);
        const users = await dispatch(userProfileThunk())
        const loggedInVal = users.type === "userAuth/profile/fulfilled" || admin
        setLoggedIn(loggedInVal)
    };

    useEffect(() => {
        getProfile()
    }, []);
    return (
        <div className="white">
            <Nav user={admin ? "admin" : "user"}/>
            <div className='imageLayout d-flex justify-content-center'>
                <img src={logoIcon} className="logo" width="100%"/>
            </div>
            <h1 className="text-white">About GoodSounds</h1>
            {!admin && !loggedIn && <div className="text-white fs-5 fw-normal p-2 mb-2">
                To take advantage of all the amazing features we offer at GoodSounds please <Link
                className="wd-gold text-decoration-none" to={"/login"}>login</Link> if you have an account, or <Link
                className="wd-gold text-decoration-none" to={"/signup"}>create one</Link>!
            </div>}
            {!admin &&
            <div className="text-white fs-5 fw-normal p-2 mb-2">
                We are a music rating site where you can keep rate and review your favorite (or not so favorite) songs
                and albums! Check it out by clicking on the search icon <i
                className={`bi bi-search wd-bright-red`}/> above, or click <Link
                className="wd-gold text-decoration-none" to={"/search"}>here</Link>
            </div>}
            {!admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                While you are here, you can also add songs you love to your 'favorite songs' playlist and those you want
                to listen to more to your 'new songs' playlist
            </div>}
            {!admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                These playlists are available to all who visit your profile, so check out everyone else's!
            </div>}
            {!admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                Feel free to comment on reviews you really agree with, or those you don't
            </div>}
            {!admin && loggedIn && <div className="text-white fs-5 fw-normal p-2 mb-2">
                Head to your profile to edit any of your information, see your recent activity, and your follow stats.
                You can do this by clicking on the avatar Icon <i className={`bi bi-person wd-bright-red`}/> above, or
                by clicking <Link
                className="wd-gold text-decoration-none" to={"/profile"}>here</Link>
            </div>}
            {!admin && loggedIn && <div className="text-white fs-5 fw-normal p-2 mb-2">
                Head to your home page to see all the recent activity of yourself and those you follow. You can do this
                by clicking on the home Icon <i className={`bi bi-house-door wd-bright-red`}/> above, or clicking <Link
                className="wd-gold text-decoration-none" to={"/home"}>here</Link>
            </div>}
            {!admin && !loggedIn && <div className="text-white fs-5 fw-normal p-2 mb-5">
                Head to your home page to see all the recent reviews of everyone who has an account with us! You can do
                this
                by clicking on the home Icon <i className={`bi bi-house-door wd-bright-red`}/> above, or clicking <Link
                className="wd-gold text-decoration-none" to={"/home"}>here</Link>
            </div>}
            {admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                As an admin, you have the ability to do a lot on this site!
            </div>}
            {admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                You can check out the activity of everyone who has an account with GoodSounds by going to you home page.
                You can do
                this
                by clicking on the home Icon <i className={`bi bi-house-door wd-bright-red`}/> above, or clicking <Link
                className="wd-gold text-decoration-none" to={"/home"}>here</Link>
            </div>}
            {admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                You can create, delete, and edit the information of users from one single location in the Users tab. You
                can do this by clicking on the users icon <i className={`bi bi-people wd-bright-red`}/> above, or
                clicking <Link
                className="wd-gold text-decoration-none" to={"/users"}>here</Link>
            </div>}
            {admin && <div className="text-white fs-5 fw-normal p-2 mb-2">
                Feel free to click on any user to access their profile and edit them directly. You can also remove
                followers here!
            </div>}
        </div>
    )
}
export default AboutGoodSounds