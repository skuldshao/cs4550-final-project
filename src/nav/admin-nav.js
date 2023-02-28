import {Link} from "react-router-dom";
import "../styles.css"

const AdminNav = (active) => {
    return (
        <ul className="nav nav-pills justify-content-between bright-red">
            <div className="nav-item">
                <Link to="/users" className={`nav-link ${active === 'people' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-people ${active === 'people' ? "" : "bright-red"}`}/>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/search" className={`nav-link ${active === 'search' ? "active bg-danger" : ""}`}>
                    <i className={`bi bi-search ${active === 'search' ? "" : "bright-red"}`}/>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
                    <i className={`bi bi-person ${active === 'profile' ? "" : "bright-red"}`}/>
                </Link>
            </div>
        </ul>
    )
}
export default AdminNav;