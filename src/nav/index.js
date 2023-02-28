import AdminNav from "./admin-nav";
import UserNav from "./user-nav";
const Nav = ({user, active}) => {
    if (user === "user") {
        return (
            <div>
                <img src='/images/smallLogo.png' height="40px" className="float-start"/>
                <div>
                    <UserNav active={active}/>
                </div>
            </div>
        )
    } else if (user === "admin") {
        return (
            <div>
                <div>
                    <img src='/images/smallLogo.png'/>
                </div>
                <div>
                    <AdminNav active={active}/>
                </div>
            </div>
        )
    }
}
export default Nav;