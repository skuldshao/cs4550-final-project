import {Link} from "react-router-dom";
import "../../../../../Downloads/cs4550-final-project-main/src/styles.css"

const AdminNav = (active) => {
    return (
        <ul className="nav nav-pills justify-content-between">
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