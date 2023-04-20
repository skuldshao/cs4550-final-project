import Nav from "../nav";
import "../styles.css"
import {HomeItem} from "./home-item";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";

export const Home = () => {
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
            <Nav active="home" user={admin ? "admin" : "user"}/>
            <HomeItem type={admin ? "admin" : "user"} loggedIn={loggedIn}/>
        </div>
    )
}