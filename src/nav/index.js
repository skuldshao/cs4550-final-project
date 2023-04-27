import AdminNav from "./admin-nav";
import UserNav from "./user-nav";
import AboutGoodSounds from "../AboutGoodSounds";
import {useNavigate} from "react-router";

const Nav = ({user, active}) => {
    const navigate = useNavigate()
    if (user === "user") {
        return (
            <div className="mb-3 pt-3 sticky-top bg-black pb-3">
                <img src='/images/smallLogo.png' height="40px" className="float-start" onClick={() => {
                    navigate("/about")
                }}/>
                <div>
                    <UserNav active={active}/>
                </div>
            </div>
        )
    } else if (user === "admin") {
        return (
            <div className="mb-3 pt-3 sticky-top bg-black pb-3">
                <div>
                    <img src='/images/smallLogo.png' height="40px" className="float-start" onClick={() => {
                        navigate("/about")
                    }}/>
                </div>
                <div>
                    <AdminNav active={active}/>
                </div>
            </div>
        )
    }
}
export default Nav;