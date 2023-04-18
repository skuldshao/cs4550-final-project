import "../styles.css"
import React, {useEffect, useState} from "react";
import {HomeItemsAdmin} from "./HomeItemsAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../services/user-thunk";
import {findAdminThunk} from "../services/admin-thunk";
import NotLoggedInHome from "./NotLoggedInHome";
import HomeItemsUser from "./HomeItemsUser";
import * as userService from "../services/user-service";

export const HomeItem = ({loggedIn, type}) => {
    const dispatch = useDispatch();
    const {users, loading, display} = useSelector((state) => state.userData)
    const {admins, loadingAdmin, displayAdmin} = useSelector((state) => state.adminData)
    useEffect(() => {
        dispatch(findUserThunk())
        dispatch(findAdminThunk())
    }, [])
    return (
        <div>
            {type === "admin" && <HomeItemsAdmin users={users} admins={admins}/>}
            {(type === "user" && loggedIn) ? <HomeItemsUser/> :
                <NotLoggedInHome users={users}/>
            }
        </div>
    )
}