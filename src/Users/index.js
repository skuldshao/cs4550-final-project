import Nav from "../nav";
import React, {useEffect, useState} from "react";
import DisplayUsers from "./displayUsers";
import Signup from "../login/signup";
import {useDispatch} from "react-redux";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import logoIcon from "../images/logo.png";
import {Link} from "react-router-dom";

const Users = () => {
    const [display, setDisplay] = useState(false)
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
        <div>
            <Nav user="admin" active="users"/>
            {(!admin && loggedIn) && <div className="text-white fs-5 fw-bold mb-2 ms-3">
                <div className='imageLayout d-flex justify-content-center'>
                    <img src={logoIcon} className="logo" width="100%"/>
                </div>
                <div className="d-flex justify-content-center">You do not have admin privileges to view this page</div>
            </div>}
            {(!loggedIn && !admin) && <div className="text-white fs-5 fw-bold mb-2 ms-3">
                <div className='imageLayout d-flex justify-content-center'>
                    <img src={logoIcon} className="logo" width="100%"/>
                </div>
                <div className="pt-2 pb-2 d-flex justify-content-center">
                    Oops! You are not logged in!
                </div>
                <div className="pt-2 pb-2 d-flex justify-content-center">
                    <Link to="/login" className="text-white text-decoration-none fw-bold"> To Login please
                        click <span className="wd-gold">here</span></Link>
                </div>
                <div className="pt-2 pb-2 d-flex justify-content-center">
                    <Link to="/signup" className="text-white text-decoration-none fw-bold">To Create an Account
                        please head <span className="wd-gold">here</span></Link>
                </div>
            </div>}
            {admin && <>
                <div className="text-white fs-5 fw-bold mb-2 ms-3">
                    {!display && <i className="bi bi-caret-down-fill text-danger" onClick={() => setDisplay(true)}/>}
                    {display && <i className="bi bi-caret-up-fill text-danger" onClick={() => setDisplay(false)}/>}
                    {display ? "Fill out the information below to create a new User or Admin" : "Create a new User or Admin"}
                </div>
                <div className="ms-3">
                    {display && <Signup inCode={true}/>}
                </div>
                <ul className="list-group">
                    <DisplayUsers/>
                </ul>
            </>}
        </div>
    )
}
export default Users