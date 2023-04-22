import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {updateUserThunk} from "../services/user-auth-thunk";


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

        if (profile.favoriteSongs.findIndex(song => song.itemId === id) !== -1)
        {
            console.log("here 1");
            setFavorite(true);
        }

        if (profile.newSongs.findIndex(song => song.itemId === id) !== -1)
        {
            console.log("here 2");
            setNew(true);
        }

        setLoading(false);
    };

    useEffect(() => {
        getProfile()
    }, [loading]);

    const dispatch = useDispatch();

    const handleFavorite = (event) => {
        setFavorite(!isFavorite);
    }

    const handleNew = (event) => {
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
            <div className="d-flex justify-content-center">
            {isFavorite ?
                <>
                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                    <label
                        className={`fs-6 fw-bold btn btn-danger btn-outline-danger text-white me-2`}
                        htmlFor="btncheck1"
                        onClick={() => handleFavorite()}>Favorited <i className="bi bi-heart-fill"></i></label></> :
                <><input type="checkbox" className="btn-check" id="btncheck1"
                         autoComplete="off"/>
                    <label
                        className={`fs-6 fw-bold btn btn-outline-dark btn-dark text-white me-2`}
                        htmlFor="btncheck1"
                        onClick={() => handleFavorite()}>Favorite <i className="bi bi-heart"></i></label></>}</div>
            <div className="">{isNew ?
                <>
                    <input type="checkbox" className="btn-check ps-5" id="btncheck1" autoComplete="off"/>
                    <label
                        className={`fs-6 fw-bold btn btn-danger btn-outline-danger text-white ms-2`}
                        htmlFor="btncheck1"
                        onClick={() => handleNew()}>Added to New Songs <i className="bi bi-bookmark-plus-fill"></i></label></> :
                <><input type="checkbox" className="btn-check" id="btncheck1"
                         autoComplete="off"/>
                    <label
                        className={`fs-6 fw-bold btn btn-outline-dark btn-dark text-white ms-2`}
                        htmlFor="btncheck1"
                        onClick={() => handleNew()}>Add to New Songs <i class="bi bi-bookmark-plus"></i></label></>}</div>
        </div>
        </div>

    )
}
export default AddToPlaylist;

