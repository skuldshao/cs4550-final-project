import logoIcon from '../images/logo.png'
import music from '../images/music.png'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import users from "../data/users.json"
import {useNavigate} from "react-router";

function Login() {
    const ADMINKEY = "ADMINKEY123!"
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(false);
    const [adminKey, setAdminKey] = useState("");

    const handleLogin = () => {
        let index;
        if (adminKey !== "") {
            index = users.findIndex(u => u.email === email && u.password === password && u.role === "admin");
            if (adminKey === ADMINKEY) {
                navigate("/home")
            } else {
                setAlert(true);
            }
        } else {
            index = users.findIndex(u => u.email === email && u.password === password);
        }
        if (index !== -1) {
            const user = users.find(u => u.email === email && u.password === password);
            // navigate(-1)
            navigate("/home")
        } else {
            setAlert(true)
        }

    }
    return (
        <div className='bg-black'>
            <div className='imageLayout d-flex justify-content-center'>
                <img src={logoIcon} className="logo" width="100%"/>
            </div>

            <div className='mx-auto' style={{maxWidth: 650}}>
                {alert && <div className="alert alert-danger alert-dismissible" role="alert">
                    <div><i className="bi bi-exclamation-triangle-fill"/>
                        <span> Password or email is incorrect, or you are trying to login as Admin without the correct credentials</span>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                            onClick={() => setAlert(false)}/>
                </div>}

                <div className='loginHits text-center fw-bold fs-3 mb-4 text-white'>To continue, log in to GoodSounds
                </div>
                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="username" className="loginHits fs-5 fw-bold">Email Address</label>
                    <input type="email"
                           className="form-control wd-gold fs-5 fw-normal border border-2 border-danger"
                           id="username"
                           placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}/>

                </div>
                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="password" className="loginHits fs-5 fw-bold">Password</label>
                    <input type="password"
                           className="inputBox form-control wd-gold fs-5 fw-normal border border-2 border-danger"
                           id="password"
                           placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="adminKey" className="loginHits fs-5 fw-bold">If you are an admin, please type the
                        admin key here</label>
                    <input type="adminKey"
                           className="inputBox form-control wd-gold fs-5 fw-normal border border-2 border-danger"
                           id="adminKey"
                           placeholder="admin key" onChange={(event) => setAdminKey(event.target.value)}/>
                </div>

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger fw-bold fs-5' disabled={password === "" || email === ""}
                            onClick={handleLogin}>Log in
                    </button>
                </div>

                <hr/>
                <div className='loginHits text-center fw-bold mb-3 fs-5 text-white'>Don't have a account for
                    GoodSounds?
                </div>
                <div className="d-flex justify-content-center">
                    <Link className='signupButton wd-gold fw-bold fs-5 text-decoration-none' to={"/signup"}>Sign Up for
                        Account
                    </Link>
                </div>
            </div>

            <div className='d-flex flex-column align-content-center align-items-center'>
                <img src={music} height={350}/>
            </div>
        </div>
    )
}

export default Login;