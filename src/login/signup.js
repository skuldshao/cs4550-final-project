import logoIcon from "../images/logo.png";
import music from "../images/music.png";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {createUserThunk, findUserThunk} from "../services/user-thunk";
import {createAdminThunk, findAdminThunk} from "../services/admin-thunk";

function Signup({inCode = false}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.userData);
    const {admins} = useSelector(state => state.adminData);
    const [image, setImage] = useState("profile1.jpeg")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [publicLocation, setPublicLocation] = useState(false)
    const [handle, setHandle] = useState("")
    const [userName, setUserName] = useState("")
    const [bio, setBio] = useState("")
    const [number, setNumber] = useState("")
    const [role, setRole] = useState("user")

    const [goodEmail, setGoodEmail] = useState(false)
    const [goodHandle, setGoodHandle] = useState(false)

    const signup = () => {
        if (role === "user") {
            const user = {
                avatarIcon: image,
                email,
                password,
                location,
                publicLocation,
                handle,
                userName,
                bio,
                number,
                joined: 2023
            }
            dispatch(createUserThunk(user));
            clearFields();
        } else {
            const admin = {
                avatarIcon: image,
                email,
                password,
                handle,
                userName,
                number,
                joined: 2023
            }
            dispatch(createAdminThunk(admin));
            clearFields();
        }
        if (!inCode) {
            navigate("/home")
        }
    }

    const clearFields = () => {
        if (role === "user") {
            setUserName('');
            setHandle('');
            setEmail('');
            setPassword('');
            setNumber("");
            setImage("profile1.jpeg");
            setBio("");
            setGoodHandle(false);
            setGoodEmail(false)
            setPublicLocation(false)
            setLocation("")
        } else {
            setRole('user');
            setUserName('');
            setHandle('');
            setEmail('');
            setPassword('');
            setNumber("");
            setImage("profile1.jpeg");
            setGoodHandle(false);
            setGoodEmail(false)
        }

    }
    useEffect(() => {
        dispatch(findUserThunk());
        dispatch(findAdminThunk());
    }, [])

    return (
        <div className='bg-black'>
            {!inCode &&
            <div className='imageLayout d-flex justify-content-center'>
                <img src={logoIcon} className="logo" width="100%"/>
            </div>}

            <div className='mx-auto'>

                <div className='loginHits text-center fw-bold fs-3 mb-4 text-white'>
                    {!inCode && 'To continue, sign up for GoodSounds'}
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="email" className="loginHits mb-1 fs-5 fw-bold">
                        {!inCode ? "What is your email address?" : "What is the new user's email address?"} </label>
                    <div className="d-flex">
                        <input type="email"
                               value={email}
                               className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                               id="email"
                               placeholder="Enter an email" onChange={(event) => {
                            setEmail(event.target.value);
                            const usersNX = users.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                            const adminsNX = admins.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                            setGoodEmail(usersNX === -1 && event.target.value.length > 0 && adminsNX === -1);
                        }}/>
                        {goodEmail ? <i className="bi bi-check fs-2"/> : <i className="bi bi-exclamation-circle fs-2"/>}
                    </div>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="password" className="loginHits mb-1 fs-5 fw-bold">Password</label>
                    <input type="password"
                           value={password}
                           className="inputBox fs-5 fw-normal form-control border border-danger border-2" id="password"
                           placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="name" className="loginHits mb-1 fs-5 fw-bold">
                        {!inCode ? "What should we call you?" : "What should we call this new user?"}
                    </label>
                    <input type="text" className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                           id="name"
                           value={userName}
                           placeholder="Enter a name" onChange={(event) => setUserName(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="handle" className="loginHits mb-1 fs-5 fw-bold">
                        {!inCode ? "What will your handle be?" : "What is the new User's handle?"}</label>
                    <div className="d-flex">
                        <input type="text"
                               className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                               id="handle"
                               value={handle}
                               placeholder="Enter a handle" onChange={(event) => {
                            setHandle(event.target.value);
                            const usersNX = users.findIndex(u => (u.handle).toLowerCase() === (event.target.value).toLowerCase());
                            const adminsNX = admins.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                            setGoodHandle(usersNX === -1 && event.target.value.length > 0 && adminsNX === -1);
                        }}/>
                        {goodHandle ? <i className="bi bi-check fs-2"/> :
                            <i className="bi bi-exclamation-circle fs-2"/>}
                    </div>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="password" className="loginHits mb-1 fs-5 fw-bold">
                        {!inCode ? "What is your phone number?" : "What is the new user's phone number?"}
                    </label>
                    <input type="tel" className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                           id="phone"
                           value={number}
                           placeholder={!inCode ? "Enter your phone number" : "Enter the new user's phone number"}
                           onChange={(event) => setNumber(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold fs-5 fw-bold'>
                    {!inCode ? `Please choose your avatar` : "Select the new user's avatar"}<br/>
                    <img src="/images/profile1.jpeg" height="80px" width="80px"
                         className={image === "profile1.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile1.jpeg")
                         }}/>
                    <img src="/images/profile2.jpeg" height="80px" width="80px"
                         className={image === "profile2.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile2.jpeg")
                         }}/>
                    <img src="/images/profile3.jpeg" height="80px" width="80px"
                         className={image === "profile3.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile3.jpeg")
                         }}/>
                    <img src="/images/profile4.jpeg" height="80px" width="80px"
                         className={image === "profile4.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile4.jpeg")
                         }}/>
                    <img src="/images/profile5.jpeg" height="80px" width="80px"
                         className={image === "profile5.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile5.jpeg")
                         }}/>
                    <img src="/images/profile6.jpeg" height="80px" width="80px"
                         className={image === "profile6.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile6.jpeg")
                         }}/>
                    <img src="/images/profile7.jpeg" height="80px" width="80px"
                         className={image === "profile7.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile7.jpeg")
                         }}/>
                    <img src="/images/profile8.jpeg" height="80px" width="80px"
                         className={image === "profile8.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile8.jpeg")
                         }}/>
                    <img src="/images/profile9.jpeg" height="80px" width="80px"
                         className={image === "profile9.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile9.jpeg")
                         }}/>
                    <img src="/images/profile10.jpeg" height="80px" width="80px"
                         className={image === "profile10.jpeg" ? "border border-3 border-danger m-1 rounded-circle" : `m-1 rounded-circle`}
                         onClick={(event) => {
                             setImage("profile10.jpeg")
                         }}/>
                </div>
                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="bio" className="loginHits mb-1 fs-5 fw-bold">
                        {!inCode ? "What role will you have in this account?" : "What role will this new user have?"}</label>
                    <select className="form-select mb-3 fs-5 fw-normal border border-danger border-2"
                            onChange={(event) => {
                                setRole(event.target.value)
                            }}>
                        <option selected value="user">User</option>
                        <option value="admin">Administration
                        </option>
                    </select>
                </div>

                {role === "user" && <>
                    <div className='loginInputLayout mb-3 wd-gold'>
                        <label htmlFor="bio" className="loginHits mb- fs-5 fw-bold">
                            {!inCode ? "Please enter your biography" : "Tell us about this new user"}
                        </label>
                        <textarea className="form-control fs-5 fw-normal border border-danger border-2"
                                  placeholder={!inCode ? "What would you love to let others know about you?" : "What would you like others to know about this new user?"}
                                  value={bio}
                                  id="bio" onChange={(event) => setBio(event.target.value)}/>
                    </div>

                    <div className='loginInputLayout mb-3 wd-gold'>
                        <label htmlFor="location" className="loginHits mb- fs-5 fw-bold">
                            {!inCode ? "Please tell us your location" : "Please tell us the new user's location"}</label>
                        <input className="form-control fs-5 fw-normal border border-danger border-2"
                               placeholder="Location"
                               value={location}
                               id="location" onChange={(event) => setLocation(event.target.value)}/>
                    </div>
                    <div className="btn-group mb-3" role="group">
                        {publicLocation ?
                            <>
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                                <label
                                    className={`fs-5 fw-bold btn btn-danger btn-outline-danger text-white`}
                                    htmlFor="btncheck1"
                                    onClick={() => setPublicLocation(false)}>Make Location
                                    Private</label></> :
                            <><input type="checkbox" className="btn-check" id="btncheck1"
                                     autoComplete="off"/>
                                <label
                                    className={`fs-5 fw-bold btn-outline-danger btn`}
                                    htmlFor="btncheck1"
                                    onClick={() => setPublicLocation(true)}>{"Make Location Public"}</label></>}
                    </div>
                </>}
                <br/>
                <div className='d-flex justify-content-center'>
                    <button className='loginButton btn btn-danger fs-5 fw-bold'
                            disabled={userName === "" || password === "" || handle === "" || email === "" || !goodHandle || !goodEmail}
                            onClick={signup}>{!inCode ? 'Sign Up for Account' : 'CREATE USER'}
                    </button>
                </div>

                <hr/>

                {!inCode && <div className='d-flex justify-content-center'>
                    <Link className='loginButton wd-gold fs-5 fw-bold text-decoration-none' to={"/login"}>Already Have
                        An Account?
                        Login</Link>
                </div>}
            </div>

            {!inCode && <div className='d-flex flex-column align-content-center align-items-center'>
                <img src={music} height={350}/>
            </div>}
        </div>
    )
}

export default Signup;