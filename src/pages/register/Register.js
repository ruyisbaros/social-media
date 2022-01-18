import './register.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">AHM.</h3>
                    <span className="loginDesc">Connect with friends all over the world</span>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" type="text" className="loginInput" />
                        <input placeholder="Enter your mail" type="email" className="loginInput" />
                        <input placeholder="Enter your passwod" type="password" className="loginInput" />
                        <input placeholder="Enter your password again" type="password" className="loginInput" />
                        <button className="loginBtn">sign up</button>

                        <button className="loginRegisterBtn">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
