import React, {useState} from "react";
import TrackDetail from "./track-detail"
import AlbumDetail from "./album-detail"
import SongDetail from "./detail";
import ReviewList from "../reviews";
import Nav from "../nav";
import WriteReview from "../reviews/write-review";
import "../search/index.css"
import { useParams } from "react-router-dom";


function Detail() {

    const {id} = useParams();

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
            <WriteReview getItemDetail={itemDetails}/>
            <ReviewList/>

        </>
    );
}

export default Detail;