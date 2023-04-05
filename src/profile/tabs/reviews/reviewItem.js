import React from "react";
import {Link} from "react-router-dom";

function ReviewItem( {reviewItem = {
                                 "song":"Song Name",
                                 "songLink": "song link",
                                 "songCover": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                                 "songArtist": "song artist",
                                 "songArtistLink": "song artist link",
                                 "reviewPreview": "review preview review preview review preview review preview review preview review preview review preview review preview review preview review preview review preview review preview review preview",
                                 "reviewTime": "5h",
                                 "stars": 4
                             }}
) {
    const rating = reviewItem.stars;
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<i className="bi bi-star-fill wd-gold"/>);
    }
    let half = false;
    if ((rating - stars.length) > 0) {
        half = true;
    }
    return (
        <div>
            <div className="row wd-black-bg p-3 pt-4 align-items-center">
                <div className="col-8 position-relative">
                    <img className="" width={45} height={45} src={reviewItem.songCover}/>
                    <div className="position-absolute start-0 top-0 ms-4 ps-5">
                        <p className="text-secondary m-0 lh-sm">
                            <Link to={reviewItem.songLink} className="text-white text-decoration-none fs-5">
                                {reviewItem.song}
                            </Link> • {reviewItem.reviewTime}</p>
                        <p className="m-0">
                            <Link to={reviewItem.songArtist} className="text-secondary text-decoration-none">
                                {reviewItem.songArtist}
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="col-2 text-warning">
                    <div className="float-end">
                        {
                            stars.map(() => {
                                return(<i className="bi bi-star-fill wd-gold"/>)
                            })
                        }
                        {
                            half && <i className="bi bi-star-half wd-gold"/>
                        }
                        {[...Array(5 - Math.ceil(reviewItem.stars)).keys()].map(() => <i className="bi bi-star wd-gold"> </i>)}
                    </div>

                </div>
            </div>
            { reviewItem.reviewPreview?
                <div className="row wd-black-bg p-3 pt-0 align-items-center">
                    <div className="col-10 ms-4 ps-5 text-secondary">
                        {reviewItem.reviewPreview}
                    </div>
                </div> : <></>
            }

        </div>
        )
}

export default ReviewItem
