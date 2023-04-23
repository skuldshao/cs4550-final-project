import React, {useState, useEffect} from "react";
import TrackDetail from "./track-detail"
import AlbumDetail from "./album-detail"
import ReviewList from "../reviews";
import Nav from "../nav";
import WriteReview from "../reviews/write-review";
import "../search/index.css"
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import AddToPlaylist from "./add-to-playlist";


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

    const [itemDetails, setItemDetails] = useState({itemName: "", artist: []});

    let item = {};
    const handleItemDetailChange = (td) => {
        setItemDetails(td);
        item = itemDetails;
    }

    let detailComponent;

    if (window.location.pathname.includes("/detail/track")) {
        detailComponent = <TrackDetail returnItemDetails={handleItemDetailChange}/>
    } else if (window.location.pathname.includes("/detail/album")) {
        detailComponent = <AlbumDetail returnItemDetails={handleItemDetailChange}/>
    }


    const track = window.location.pathname.includes("track");

    return (
        <>
            <Nav user={admin ? "admin" : "user"} active="search"/>
            {detailComponent}
            {loggedIn && !admin && track ? <><AddToPlaylist itemId={id}/><WriteReview
                getItemDetail={itemDetails}/></> : <></>}
            <ReviewList loggedIn={loggedIn}/>
        </>
    );
}

export default Detail;