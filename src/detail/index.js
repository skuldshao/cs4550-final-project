import React from "react";
import SongDetail from "./detail";
import ReviewList from "../reviews";
import WriteReview from "../reviews/write-review";

function Detail() {
    return(
        <>
            <SongDetail/>
            <WriteReview/>
            <ReviewList/>

        </>
    );
}

export default Detail;