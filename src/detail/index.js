import React from "react";
import TrackDetail from "./detail"
import SongDetail from "./detail";
import ReviewList from "../reviews";
import WriteReview from "../reviews/write-review";
import "../search/index.css"

function Detail() {
    return(
        <>
            <TrackDetail/>
            <WriteReview/>



        </>
    );
}

export default Detail;