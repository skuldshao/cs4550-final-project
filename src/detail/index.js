import React, {useState, useEffect} from "react";
import TrackDetail from "./track-detail"
import AlbumDetail from "./album-detail"
import SongDetail from "./detail";
import ReviewList from "../reviews";
import Nav from "../nav";
import WriteReview from "../reviews/write-review";
import "../search/index.css"
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {findReviewBySongIdThunk} from "../services/review-thunk";


function Detail() {

    const {id} = useParams();
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

    console.log(loggedIn)

    const [itemDetails, setItemDetails] = useState({itemName: "", artist: []});

    let item = {};
    const handleItemDetailChange = (td) => {
        setItemDetails(td);
        item = itemDetails;
    }

    let detailComponent;

    if (window.location.pathname.includes("/detail/track")) {
        detailComponent = <TrackDetail returnItemDetails={handleItemDetailChange}/>
    }
    else if (window.location.pathname.includes("/detail/album")) {
        detailComponent = <AlbumDetail returnItemDetails={handleItemDetailChange}/>
    }

/*
    console.log("passed song name: " + itemDetails.itemName);
    console.log("passed artist name: " + itemDetails.artist);

    console.log("passed item name: " + item.itemName);
    console.log("passed item artist: " + item.artist);

 */

    return(
        <>
            <Nav user="user" active="search"/>
            {detailComponent}
            {loggedIn? <WriteReview getItemDetail={itemDetails}/> : <></>}
            <ReviewList/>

        </>
    );
}

export default Detail;