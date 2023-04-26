import TimeDisplay from "../time-display";
import {Link} from "react-router-dom";

const CommentItem = ({item, loggedIn, reviewer, profId}) => {
    console.log(reviewer)
    console.log()
    return (
        <>
            <div className="d-flex justify-content-between mt-3 mb-3">
                <div className="d-flex justify-content-start">
                    <Link
                        to={loggedIn ? (item.userId === profId ? '/profile' : `/profile/${item.userId}`) : `/profile/${item.userId}`}
                        className="text-white text-decoration-none">
                        <img src={`/images/${item.avatarIcon}`} height="50px" width="50px" className="rounded-circle"/>
                    </Link>
                    <Link
                        to={loggedIn ? (item.userId === profId ? '/profile' : `/profile/${item.userId}`) : `/profile/${item.userId}`}
                        className="text-white text-decoration-none align-self-center">
                        <span className="ms-3 align-self-center">{item.comment}</span>
                    </Link>
                </div>
                <div className="text-secondary"><TimeDisplay itemDate={item.date}/></div>
            </div>
            <hr/>
        </>
    )
}
export default CommentItem