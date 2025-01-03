import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/Auth/authContext';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // Access login from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `${String(process.env.REACT_APP_API_BASE_URL)}/api/${String(process.env.REACT_APP_AUTH_FOR_USER)}/${String(process.env.REACT_APP_LOGIN_FOR_USER)}`;
            console.log("Final API URL:", apiUrl); // Log the final URL to confirm

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            });

            const res = await response.json();
            console.log("Response:", res);


            if (res.Success && res.token) {
                localStorage.setItem('auth_token', res.token); // Store the token in localStorage
                login('user'); // Update AuthContext with login state
                alert('Logged In Successfully');
                navigate('/Dashboard'); // Redirect to Dashboard or any other page
            }

            if (!response.ok) {
                throw new Error(res.error || "Login failed");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed: ' + error.message);
        }
    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={credentials.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="mt-3 text-center">
                                <p>Don't have an account? <Link to="/signup">Create New Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
