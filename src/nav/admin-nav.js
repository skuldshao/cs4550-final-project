import {Link} from "react-router-dom";
import styles from "../styles.css"

const AdminNav = (active) => {
    return (
        <ul className="nav nav-pills justify-content-between bright-red">
            <div className="nav-item">
                <Link to="/users" className={`nav-link ${active === 'people' ? 'active' : ''}`}>
                    <i className="bi bi-people"/>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/search" className={`nav-link ${active === 'search' ? 'active' : ''}`}>
                    <i className="bi bi-search"/>
                </Link>
            </div>
            <div className="nav-item">
                <Link to="/profile" className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
                    <i className="bi bi-person"/>
                </Link>
            </div>
        </ul>
    )
}
export default AdminNav;