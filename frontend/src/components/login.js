import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://127.0.0.1:8000/loginuser', {
                email: email,
                password: password
            });

            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className="form_container p-5 rounded bg-white">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign in</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className="custom-control custom-checkbox" />
                        <label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-right">
                        Forgot <a href="http://localhost:3000/forgotpassword">Password?</a>
                        <a href="http://localhost:3000/signup"> Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
