import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-light text-dark">
                            <h4 className="mb-0">Logout Confirmation</h4>
                        </div>
                        <div className="card-body text-center">
                            <p className="card-text lead mb-4">
                                Are you sure you want to log out?
                            </p>
                            <button 
                                onClick={() => navigate(-1)} // Navigate back to previous page
                                className="btn btn-outline-dark btn-lg w-100"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;
