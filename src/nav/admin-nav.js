import {Link} from "react-router-dom";
import "../styles.css"

const AdminNav = ({active}) => {
    return (
        <ul className="nav nav-pills justify-content-between">
            <li className="nav-item">
                <Link to="/home" className={`nav-link ${active === 'home' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-house-door ${active === 'home' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/users" className={`nav-link ${active === 'users' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-people ${active === 'users' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? 'active bg-danger' : ''}`}>
                    <i className={`bi bi-person ${active === 'profile' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
        </ul>
    )
}
export default AdminNav;