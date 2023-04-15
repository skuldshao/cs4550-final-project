import logoIcon from "../images/logo.png";
import music from "../images/music.png";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import users from "../data/users.json"

function Signup() {
    const navigate = useNavigate();
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
            role,
            joined: 2023
        }
        users.push(user);
        navigate("/home")
    }

    return (
        <div className='bg-black'>
            <div className='imageLayout d-flex justify-content-center'>
                <img src={logoIcon} className="logo" width="100%"/>
            </div>

            <div className='mx-auto' style={{maxWidth: 650}}>

                <div className='loginHits text-center fw-bold fs-3 mb-4 text-white'>
                    To continue, sign up for GoodSounds
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="email" className="loginHits mb-1 fs-5 fw-bold">What is your email
                        address? </label>
                    <div className="d-flex">
                        <input type="email"
                               className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                               id="email"
                               placeholder="Enter your email" onChange={(event) => {
                            setEmail(event.target.value);
                            const index = users.findIndex(u => (u.email).toLowerCase() === (event.target.value).toLowerCase());
                            console.log("hi" + event.target.value + "hi")
                            setGoodEmail(index === -1 || event.target.value.length > 0);
                        }}/>
                        {goodEmail ? <i className="bi bi-check fs-2"/> : <i className="bi bi-exclamation-circle fs-2"/>}
                    </div>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="password" className="loginHits mb-1 fs-5 fw-bold">Password</label>
                    <input type="password"
                           className="inputBox fs-5 fw-normal form-control border border-danger border-2" id="password"
                           placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="name" className="loginHits mb-1 fs-5 fw-bold">What should we call you?</label>
                    <input type="text" className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                           id="name"
                           placeholder="Enter a name" onChange={(event) => setUserName(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="handle" className="loginHits mb-1 fs-5 fw-bold">What will your handle be?</label>
                    <div className="d-flex">
                        <input type="text"
                               className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                               id="handle"
                               placeholder="Enter a handle" onChange={(event) => {
                            setHandle(event.target.value);
                            const index = users.findIndex(u => (u.handle).toLowerCase() === (event.target.value).toLowerCase());
                            setGoodHandle(index === -1 || event.target.value.length > 0);
                        }}/>
                        {goodHandle ? <i className="bi bi-check fs-2"/> :
                            <i className="bi bi-exclamation-circle fs-2"/>}
                    </div>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="password" className="loginHits mb-1 fs-5 fw-bold">What is your phone number?</label>
                    <input type="tel" className="inputBox fs-5 fw-normal form-control border border-danger border-2"
                           id="phone"
                           placeholder="Enter your phone number" onChange={(event) => setNumber(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="bio" className="loginHits mb- fs-5 fw-bold">Please enter your biography</label>
                    <textarea className="form-control fs-5 fw-normal border border-danger border-2"
                              placeholder="What would you love to let others know about you?"
                              id="bio" onChange={(event) => setBio(event.target.value)}/>
                </div>

                <div className='loginInputLayout mb-3 wd-gold'>
                    <label htmlFor="location" className="loginHits mb- fs-5 fw-bold">Please tell us your
                        location</label>
                    <input className="form-control fs-5 fw-normal border border-danger border-2"
                           placeholder="Location"
                           id="location" onChange={(event) => setLocation(event.target.value)}/>
                </div>
                <div className="btn-group mb-3" role="group">
                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                    <label className="btn btn-outline-danger fs-5 fw-bold" htmlFor="btncheck1"
                           onClick={() => setPublicLocation(!publicLocation)}>Make Location
                        Public</label>
                </div>

                <div className='loginInputLayout mb-3 wd-gold fs-5 fw-bold'>
                    Please choose your avatar<br/>
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
                    <label htmlFor="bio" className="loginHits mb-1 fs-5 fw-bold">What role will you have in this
                        account?</label>
                    <select className="form-select mb-3 fs-5 fw-normal" onChange={(event) => {
                        setRole(event.target.value)
                    }}>
                        <option selected value="user">User</option>
                        <option value="admin">Administration
                        </option>
                    </select>
                </div>
                <br/>
                <div className='d-flex justify-content-center'>
                    <button className='loginButton btn btn-danger fs-5 fw-bold'
                            disabled={userName === "" || password === "" || handle === "" || email === "" || !goodHandle || !goodEmail}
                            onClick={signup}>Sign Up for
                        Account
                    </button>
                </div>

                <hr/>

                <div className='d-flex justify-content-center'>
                    <Link className='loginButton wd-gold fs-5 fw-bold text-decoration-none' to={"/login"}>Already Have
                        An Account?
                        Login</Link>
                </div>
            </div>

            <div className='d-flex flex-column align-content-center align-items-center'>
                <img src={music} height={350}/>
            </div>
        </div>
    )
}

export default Signup;