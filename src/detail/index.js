import React, {useState} from "react";
import TrackDetail from "./detail"
import SongDetail from "./detail";
import ReviewList from "../reviews";
import WriteReview from "../reviews/write-review";
import "../search/index.css"


function Detail() {

    const [itemDetails, setItemDetails] = useState({itemName: "", artist: []});

    let item = {};
    const handleItemDetailChange = (td) => {
        setItemDetails(td);
        item = itemDetails;
    }

/*
    console.log("passed song name: " + itemDetails.itemName);
    console.log("passed artist name: " + itemDetails.artist);

    console.log("passed item name: " + item.itemName);
    console.log("passed item artist: " + item.artist);

 */

    return(
        <>
            <TrackDetail returnItemDetails={handleItemDetailChange}/>
            <WriteReview getItemDetail={itemDetails}/>



        </>
    );
}

export default Detail;