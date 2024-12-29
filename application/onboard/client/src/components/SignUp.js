import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Sign Up</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userType">User Type:</label>
                                    <select
                                        id="userType"
                                        className="form-control"
                                        name="userType"
                                        required
                                    >
                                        <option value="">Select user type</option>
                                        <option value="Student">Student</option>
                                        <option value="Recruiter">Recruiter</option>
                                        <option value="Company">Company</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                            <div className="mt-3 text-center">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
