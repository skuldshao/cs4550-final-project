import "../styles.css"
import {Link} from "react-router-dom";
import Stars from "../stars";

export const HomeList = ({review, loggedIn}) => {
    if (loggedIn) {
        return (
            <li className="list-group-item border-0 bg-black">
                <div className="d-flex justify-content-between wd-bg-grey p-2 rounded-2">
                    <Link to={`/profile/${review.uid}`}>
                        <img src={`/images/${review.img}`} height={50} width={50}
                             className="rounded-circle align-self-center"
                             alt="profile icon"/>
                    </Link>
                    <div className="ps-2 align-self-center">
                        {`${review.action}
                    ${review.item ? review.item : ''}
                    ${review.location ? review.location : ''}
                    `}
                        <Stars rating={review.ratings}/>
                    </div>
                    <div className="align-self-center ms-auto p-2">
                        {review.time} ago
                    </div>
                </div>
            </li>
        )
    } else {
        if (!review.loggedIn) {
            return (
                <li className="list-group-item border-0 bg-black">
                    <div className="d-flex justify-content-between wd-bg-grey p-2 rounded-2">
                        <Link to={`/profile/${review.uid}`}>
                            <img src={`/images/${review.img}`} height={50} width={50}
                                 className="rounded-circle align-self-center"
                                 alt="profile icon"/>
                        </Link>
                        <div className="ps-2 align-self-center">
                            {`${review.action}
                    ${review.item ? review.item : ''}
                    `}
                            <Stars rating={review.ratings}/>
                        </div>
                        <div className="align-self-center ms-auto p-2">
                            {review.time} ago
                        </div>
                    </div>
                </li>
            )
        }
    }
}