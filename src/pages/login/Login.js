import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">AHM.</h3>
                    <span className="loginDesc">Connect with friends all over the world</span>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Enter your mail" type="email" className="loginInput" />
                        <input placeholder="Enter your password" type="password" className="loginInput" />
                        <button className="loginBtn">log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterBtn">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
