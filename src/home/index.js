import Nav from "../nav";
import reviews from "./home-reviews.json";
import {HomeList} from "./home-list";
import "../styles.css"

export const Home = () => {
    return (
        <div className="white">
            <Nav user="user" active="home"/>
            <ul className="list-group">
                {
                    reviews.map(review => {
                        return (<HomeList review={review} loggedIn={true}/>);
                    })
                }
            </ul>
        </div>
    )
}