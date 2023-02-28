import {Link} from "react-router-dom";
import "../styles.css"

const UserNav = ({active}) => {
    return (
        <ul className="nav nav-pills justify-content-between">
            <li className="nav-item">
                <Link to="/home" className={`nav-link ${active === 'home' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-house-door ${active === 'home' ? "" : "bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className={`nav-link ${active === 'search' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-search ${active === 'search' ? "" : "bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-person ${active === 'profile' ? "" : "bright-red"}`}/>
                </Link>
            </li>
        </ul>
    )
}
export default UserNav;