import "../styles.css"
import {Link} from "react-router-dom";
import Stars from "../stars";
import reviewsAr from "../data/reviews.json";
import RecentActivityItem from "../profile/tabs/overview/recentActivityItem";
import React, {useEffect} from "react";
import {HomeItemsAdmin} from "./HomeItemsAdmin";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../services/user-thunk";
import {findAdminThunk} from "../services/admin-thunk";

export const HomeItem = ({loggedIn, type}) => {
    const dispatch = useDispatch();
    const {users, loading, display} = useSelector((state) => state.userData)
    const {admins, loadingAdmin, displayAdmin} = useSelector((state) => state.adminData)
    useEffect(() => {
        dispatch(findUserThunk())
        dispatch(findAdminThunk())
    }, [])
    if (type === "admin") {
        return (
            <div>
                <HomeItemsAdmin users={users}/>
            </div>
        );
    } else {

    }
}