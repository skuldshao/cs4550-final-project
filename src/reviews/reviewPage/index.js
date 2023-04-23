import React from "react";
import ReviewPage from "./review-page";
import Nav from "../../nav";


function Review() {
    return (
        <div className="text-white">
            <Nav user="user" active="search"/>
            <ReviewPage/>
        </div>
    );
}

export default Review;