
import "../styles.css"
import {Link} from "react-router-dom";

export const HomeList = ({review, loggedIn}) => {
    const rating = review.ratings;
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<i className="bi bi-star-fill wd-gold"/>);
    }
    let half = false;
    if ((rating - stars.length) > 0) {
        half = true;
    }
    const mt = 5 - (Math.ceil(rating))
    const mtStars = [];
    for (let i = 0; i < mt; i++) {
        mtStars.push(<i className="bi bi-star wd-gold"/>);
    }
    if (loggedIn) {
        return (
            <li className="list-group-item border-0 bg-black">
                <div className="d-flex justify-content-between wd-bg-grey p-2 rounded-2">
                    <Link to={`/profile/${review.uid}`}>
                        <img src={`/images/${review.img}`} height={50} width={50} className="rounded-circle align-self-center"
                             alt="profile icon"/>
                    </Link>
                    <div className="ps-2 align-self-center">
                        {`${review.action}
                    ${review.item ? review.item : ''}
                    ${review.location ? review.location : ''}
                    `}
                        {
                            stars.map(value => {
                                return(value)
                            })
                        }
                        {
                            half && <i className="bi bi-star-half wd-gold"/>
                        }
                        {
                            mtStars.map(value => {
                                return value
                            })
                        }
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
                            <img src={`/images/${review.img}`} height={50} width={50} className="rounded-circle align-self-center"
                                 alt="profile icon"/>
                        </Link>
                        <div className="ps-2 align-self-center">
                            {`${review.action}
                    ${review.item ? review.item : ''}
                    `}
                            {
                                stars.map(value => {
                                    return(value)
                                })
                            }
                            {
                                half && <i className="bi bi-star-half wd-gold"/>
                            }
                            {
                                mtStars.map(value => {
                                   return value
                                })
                            }
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