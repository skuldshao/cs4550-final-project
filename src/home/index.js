import Nav from "../nav";
import reviews from "./home-reviews.json";
import {HomeList} from "./home-list";

export const Home = () => {
    return (
        <div>
            <Nav user="user" active="home"/>
            <ul className="list-group">
            {
                reviews.map(review => {
                    return(<HomeList review={review} loggedIn={true}/>);
                })
            }
            </ul>
        </div>
    )
}