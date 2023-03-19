import "../../../../../Downloads/cs4550-final-project-main/src/styles.css"

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
    if (loggedIn) {
        return (
            <li className="list-group-item border-0 bg-black">
                <div className="d-flex justify-content-between wd-bg-grey p-2 rounded-2">
                    <img src={`/images/${review.img}`} height={50} width={50} className="rounded-circle align-self-center"
                         alt="profile icon"/>
                    <div className="ps-2 align-self-center">
                        {`${review.action}
                    ${review.item ? review.item : ''}
                    ${review.location ? review.location : ''}
                    `}
                        {
                            stars.map(() => {
                                return(<i className="bi bi-star-fill wd-gold"/>)
                            })
                        }
                        {
                            half && <i className="bi bi-star-half wd-gold"/>
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
                <li className="list-group-item">
                    <div className="d-flex justify-content-between wd-bg-grey p-2 rounded-2">
                        <img src={`/images/${review.img}`} height={50} width={50} className="rounded-circle align-self-center"
                             alt="profile icon"/>
                        <div className="ps-2 align-self-center">
                            {`${review.action}
                    ${review.item ? review.item : ''}
                    `}
                            {
                                stars.map(() => {
                                    return(<i className="bi bi-star-fill wd-gold"/>)
                                })
                            }
                            {
                                half && <i className="bi bi-star-half wd-gold"/>
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