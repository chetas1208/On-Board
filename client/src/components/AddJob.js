import React, { useState, useContext } from 'react';
import JobContext from '../context/Jobs/jobsContext';

const AddJob = ({ isDarkMode }) => {
    const { addJob } = useContext(JobContext);

    const [jobDetails, setJobDetails] = useState({
        jobTitle: '',
        jobDescription: '',
        jobCompany: '',
        jobSalary: '',
        jobType: '',
        jobRequirements: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addJob(jobDetails);
        setJobDetails({
            jobTitle: '',
            jobDescription: '',
            jobCompany: '',
            jobSalary: '',
            jobType: '',
            jobRequirements: ''
        });
    };

    const handleChange = (e) => {
        setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`container mt-5 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
            style={{
                padding: '20px',
                borderRadius: '8px',
            }}
        >
            <h1 className="mb-4" style={{ color: isDarkMode ? 'white' : 'black' }}>Add a New Job</h1>
            {['jobTitle', 'jobDescription', 'jobCompany', 'jobSalary', 'jobType', 'jobRequirements'].map((field) => (
                <div className="mb-3" key={field}>
                    <label
                        htmlFor={field}
                        className="form-label"
                        style={{ color: isDarkMode ? 'white' : 'black' }}
                    >
                        {field === 'jobDescription' || field === 'jobRequirements' ? 'Job ' : ''}
                        {field.replace(/([a-z])([A-Z])/g, '$1 $2')}
                    </label>
                    {field === 'jobDescription' || field === 'jobRequirements' ? (
                        <textarea
                            className={`form-control ${isDarkMode ? 'bg-secondary text-white' : ''}`}
                            id={field}
                            name={field}
                            value={jobDetails[field]}
                            onChange={handleChange}
                            placeholder={`Enter ${field}`}
                            rows="4"
                            required
                        ></textarea>
                    ) : (
                        <input
                            type={field === 'jobSalary' ? 'number' : 'text'}
                            className={`form-control ${isDarkMode ? 'bg-secondary text-white' : ''}`}
                            id={field}
                            name={field}
                            value={jobDetails[field]}
                            onChange={handleChange}
                            placeholder={`Enter ${field}`}
                            required
                        />
                    )}
                </div>
            ))}
            <button
                type="submit"
                className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'} w-100`}
            >
                Submit Job
            </button>
        </form>
    );
};

export default AddJob;
