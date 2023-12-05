import React from "react";
import { Link } from "react-router-dom";


function Forgotpassword() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Password reset</h3>
                    <p className="text-center">Set a new password</p>
                    <div className='mb-2'>
                        <input type="email" placeholder="Create new password" className="form-control"></input>
                    </div>
                    <div className='mb-2'>
                        <input type="email" placeholder="Confirm your password" className="form-control"></input>
                    </div>
                    <div className="mt-2 d-grid">
                        <button className="btn btn-primary">Set Password</button>
                    </div>
                    <p className="text-end mt-2">
                        Back to Sign In ? <Link to="/" className="ms-2">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Forgotpassword