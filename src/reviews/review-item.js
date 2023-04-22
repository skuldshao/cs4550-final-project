import React from "react";
import Rating from "./rating/index.js"
import {useDispatch} from "react-redux";
import "./rating/index";

const ReviewItem = (
    {
        review = {
            "_id": 1,
            "music_id": 1,
            "handle": "@test1",
            "image": "",
            "time": "1min",
            "rating": 5,
            "likes": 10,
            "review": "review1"
        }
    }) => {

    // const [isSelf, setIsSelf] = useState(currentID ? review.userId === currentID : false)

    return (

        <div className="border text-white" id={review._id}>
            <div className="flex-row">
                <div className="">
                    <img width={50}
                         height={50}
                         className="float-start rounded-circle"
                         alt=""
                         src={""}/>
                </div>
                <div className="wd-color-white">
                     {/*stars*/}
                    {
                        [...Array(5).keys()].map(key => key < review.rating? <i className="bi bi-star-fill wd-on me-1"/> : <i className="bi bi-star wd-off me-1"></i>)
                        //Array(5).map(key => console.log(key))//key < review.rating? <i className="bi bi-star-fill wd-on"/> : <i className="bi bi-star"></i>)
                    }
                    <p>{review.handle}</p>
                </div>
            </div>
            <div className="flex-row">
                <p>{review.review}</p>
            </div>

        </div>
    )
}
export default ReviewItem;

