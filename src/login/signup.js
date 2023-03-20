import logoIcon from "../images/logo.png";
import music from "../images/music.png";

function Signup() {
    const accountInfo = {email:null,password:null,username:null,
        phone:null, bio: null,iamge:null, role:null}

    return (
        <div className='bg-black'>
            <div className='imageLayout'>
                <img src={logoIcon} className="logo"/>
            </div>

            <div className='mx-auto'>

                <div className='loginHits text-center mb-4'>Sign up with your email address</div>
                <div className='loginInputLayout'>
                    <label htmlFor="username" className="loginHits mb-1">What is your email address? </label>
                    <input type="email" className="inputBox" id="username" placeholder="Enter your email"/>
                </div>

                <div className='loginInputLayout'>
                        <label htmlFor="username" className="loginHits mb-1">Confirm your email</label>
                        <input type="email" className="inputBox" id="username" placeholder="Enter your email Again"/>
                </div>

                <div className='loginInputLayout'>
                    <label htmlFor="password" className="loginHits mb-1">Password</label>
                    <input type="password" className="inputBox" id="password"
                           placeholder="Password"/>
                </div>

                <div className='loginInputLayout'>
                    <label htmlFor="username" className="loginHits mb-1">What should we call you?</label>
                    <input type="text" className="inputBox" id="username"
                           placeholder="Enter a profile name."/>
                    <span className="text-white">This appears on your profile.</span>
                </div>

                <div className='loginInputLayout mt-3'>
                    <label htmlFor="password" className="loginHits mb-1">What is your phone number?</label>
                    <input type="password" className="inputBox" id="phone"
                           placeholder="Enter your phone number."/>
                </div>

                <div className='loginInputLayout'>
                    <label htmlFor="bio" className="loginHits mb-1">Please enter your biography</label>
                    <textarea className="form-control" placeholder="What would you love to let others know about you?"
                              id="bio"></textarea>
                </div>

                <div className='loginInputLayout mt-3'>
                    <label htmlFor="bio" className="loginHits mb-1">Please upload your avatar</label>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="avatar"/>
                            <label className="input-group-text"
                                   htmlFor="avatar">Upload</label>
                    </div>
                </div>

                <div className='loginInputLayout mt-3'>
                    <label htmlFor="bio" className="loginHits mb-1">what role would you love to choose for your account?</label>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">User</a></li>
                            <li><a className="dropdown-item" href="#">Administrator</a></li>
                        </ul>
                    </div>
                </div>

                <hr/>
                <button className='signupButton'>Sign Up for Account</button>
            </div>

            <div className='d-flex flex-column align-content-center align-items-center'>
                <img src={music} height={350}/>
            </div>
        </div>
    )
}

export default Signup;