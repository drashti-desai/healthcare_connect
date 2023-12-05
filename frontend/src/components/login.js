import React from "react";

function Login() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign in</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control"></input>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className="custom-control custom-checkbox"></input>
                        <label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-right">
                        Forgot <a href="http://localhost:3000/forgotpassword"> Password? </a><a href="http://localhost:3000/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login