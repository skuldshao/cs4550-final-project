import Nav from "../nav";
import "../styles.css"
import {HomeItem} from "./home-item";

export const Home = () => {
    const user = "user"
    const loggedIn = true
    return (
        <div className="white">
            <Nav user={user} active="home"/>
            <HomeItem type={user} loggedIn={loggedIn}/>
        </div>
    )
}