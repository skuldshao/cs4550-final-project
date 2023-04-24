import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {profileThunk as userProfileThunk, updateUserThunk as updateCurrentUserThunk} from "../services/user-auth-thunk";
import {updateUserThunk} from "../services/user-auth-thunk";
import {profileThunk as adminProfileThunk} from "../services/admin-auth-thunk";


const AddToPlaylist = (itemDetail) => {
    const [isFavorite, setFavorite] = useState(false);
    const [isNew, setNew] = useState(false);
    const {id} = useParams();
    let type = '';

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const getProfile = async () => {
        const profileData = await dispatch(userProfileThunk());
        const profile = profileData.payload;
        setProfile(profile);

        if (profile.favoriteSongs.findIndex(song => song.musicID === id) !== -1) {
            setFavorite(true);
        }

        if (profile.newSongs.findIndex(song => song.musicID === id) !== -1) {
            setNew(true);
        }

        setLoading(false);
    };

    useEffect(() => {
        getProfile()
    }, [loading]);

    const dispatch = useDispatch();

    const handleFavorite = async (event) => {
        let thing;
        if (type === "admin") {
            const toSet = await dispatch(adminProfileThunk());
            thing = toSet.payload

        } else {
            const toSet = await dispatch(userProfileThunk())
            thing = toSet.payload
        }
        if (isFavorite) { // remove favorite
            profile.favoriteSongs.map(song => console.log(song));
            const currentFavorites = profile.favoriteSongs.filter(song => song.musicID !== id);
            dispatch(updateUserThunk({...thing, "favoriteSongs": currentFavorites}))
            dispatch(updateCurrentUserThunk({...thing, "favoriteSongs": currentFavorites}))
        } else { // add favorite
            console.log(id);
            const currentFavorites = [...profile.favoriteSongs, {date: Date.now(), musicID: id}];
            dispatch(updateUserThunk({...thing, "favoriteSongs": currentFavorites}))
            dispatch(updateCurrentUserThunk({...thing, "favoriteSongs": currentFavorites}))
        }

        setFavorite(!isFavorite);
    }

    const handleNew = async (event) => {
        let thing;
        if (type === "admin") {
            const toSet = await dispatch(adminProfileThunk());
            thing = toSet.payload

        } else {
            const toSet = await dispatch(userProfileThunk())
            thing = toSet.payload
        }
        if (isNew) { // remove favorite
            const currentNew = profile.newSongs.filter(song => song.musicID !== id);
            dispatch(updateUserThunk({...thing, "newSongs": currentNew}))
            dispatch(updateCurrentUserThunk({...thing, "newSongs": currentNew}))
        } else { // add favorite
            console.log(id);
            const currentNew = [...profile.newSongs, {date: Date.now(), musicID: id}];
            dispatch(updateUserThunk({...thing, "newSongs": currentNew}))
            dispatch(updateCurrentUserThunk({...thing, "newSongs": currentNew}))
        }

        setNew(!isNew);
    }

    /*
    // const date = new Date();
    // console.log("rating: " + rating);
    // console.log("params: " + id);
    // // console.log("date: " + `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    // console.log("item name: " + itemDetail.getItemDetail.itemName);
    // console.log("item name album: " + itemDetail.getItemDetail);
    // console.log("artist: " + itemDetail.getItemDetail.artist);
    // console.log("profile: " + profile);

     */


    return (
        <div className="border p-3 text-white">
            <div className="btn-group d-flex justify-content-center" role="group">
                {loading ? <span>Loading...</span> : <>
                    <div className="d-flex justify-content-center">
                        {isFavorite ?
                            <>
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                                <label
                                    className={`fs-6 fw-bold btn btn-danger btn-outline-danger text-white me-2`}
                                    htmlFor="btncheck1"
                                    onClick={() => handleFavorite()}>Favorited <i
                                    className="bi bi-heart-fill"/></label></> :
                            <><input type="checkbox" className="btn-check" id="btncheck1"
                                     autoComplete="off"/>
                                <label
                                    className={`fs-6 fw-bold btn btn-outline-dark btn-dark text-white me-2`}
                                    htmlFor="btncheck1"
                                    onClick={() => handleFavorite()}>Favorite <i
                                    className="bi bi-heart"/></label></>}</div>
                    <div className="">{isNew ?
                        <>
                            <input type="checkbox" className="btn-check ps-5" id="btncheck1" autoComplete="off"/>
                            <label
                                className={`fs-6 fw-bold btn btn-danger btn-outline-danger text-white ms-2`}
                                htmlFor="btncheck1"
                                onClick={() => handleNew()}>Added to New Songs <i
                                className="bi bi-bookmark-plus-fill"/></label></> :
                        <><input type="checkbox" className="btn-check" id="btncheck1"
                                 autoComplete="off"/>
                            <label
                                className={`fs-6 fw-bold btn btn-outline-dark btn-dark text-white ms-2`}
                                htmlFor="btncheck1"
                                onClick={() => handleNew()}>Add to New Songs <i
                                className="bi bi-bookmark-plus"/></label></>}</div>
                </>}
            </div>
        </div>

    )
}
export default AddToPlaylist;

