import React from "react";
import {Link} from "react-router-dom";

const NotLoggedInProfile = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div>
                    <img src="/images/logo.png" width="100%"/><br/>
                    <div className="text-white fw-bold fs-3">
                        <div className="pt-2 pb-2 d-flex justify-content-center">
                            Oops! You are not logged in!
                        </div>
                        <div className="pt-2 pb-2 d-flex justify-content-center">
                            <Link to="/login" className="text-white text-decoration-none fw-bold"> To Login please
                                click <span className="wd-gold">here</span></Link>
                        </div>
                        <div className="pt-2 pb-2 d-flex justify-content-center">
                            <Link to="/signup" className="text-white text-decoration-none fw-bold">To Create an Account
                                please head <span className="wd-gold">here</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotLoggedInProfile