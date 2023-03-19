import logoIcon from '../images/logo.png'
import music from '../images/music.png'
function LoginPage() {
    return (
    <div className='bg-black'>
        <div className='imageLayout'>
        <img src={logoIcon} className="logo"/>
        </div>

        <div className='mx-auto' style={{maxWidth:650}}>

            <div className='loginHits text-center fw-bold mb-4'>To continue, log in to GoodSounds.</div>
        <div className='loginInputLayout'>
            <label htmlFor="username" className="loginHits">Email Address</label>
            <input type="email" className="inputBox" id="username" placeholder="Enter your email"/>

        </div>
            <div className='loginInputLayout'>
                <label htmlFor="password" className="loginHits">Password</label>
                <input type="password" className="inputBox" id="password"
                       placeholder="Password"/>
            </div>

            <div className='d-flex justify-content-between'>
                <a href="#" className='loginHits'>Forget your password?</a>
                <button className='loginButton'>Log in</button>
            </div>

            <hr/>
            <div className='loginHits text-center fw-bold mb-3'>Don't have a account for GoodSounds?</div>
            <button className='signupButton'>Sign Up for Account</button>
        </div>

        <div className='d-flex flex-column align-content-center align-items-center'>
            <img src={music} height={350}/>
        </div>
    </div>
    )
}
export default LoginPage;