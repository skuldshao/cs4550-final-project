import {Link} from "react-router-dom";
import "../../../../../Downloads/cs4550-final-project-main/src/styles.css"

const UserNav = ({active}) => {
    return (
        <ul className="nav nav-pills justify-content-between">
            <li className="nav-item">
                <Link to="/home" className={`nav-link ${active === 'home' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-house-door ${active === 'home' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className={`nav-link ${active === 'search' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-search ${active === 'search' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-person ${active === 'profile' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
        </ul>
    )
}
export default UserNav;