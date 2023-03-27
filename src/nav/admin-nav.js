import {Link} from "react-router-dom";
import "../styles.css"

const AdminNav = (active) => {
    return (
        <ul className="nav nav-pills justify-content-between">
            <li className="nav-item">
                <Link to="/users" className={`nav-link ${active === 'people' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-people ${active === 'people' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search" className={`nav-link ${active === 'search' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-search ${active === 'search' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
                    <i className={`bi bi-person ${active === 'profile' ? "" : "wd-bright-red"}`}/>
                </Link>
            </li>
        </ul>
    )
}
export default AdminNav;