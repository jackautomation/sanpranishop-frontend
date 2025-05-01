import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';  // Import axios for making HTTP requests
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    serverError: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ passwordMismatch: true });
    } else {
      setErrors({ passwordMismatch: false });

      try {
        // Send the form data to the backend
        const response = await axios.post('http://localhost:5000/register', formData);
        console.log('Registration Success:', response.data);
        // Redirect or show success message
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({ serverError: error.response.data.error });
        } else {
          setErrors({ serverError: 'An unexpected error occurred. Please try again later.' });
        }
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Create a New Account</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mt-3">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mt-3">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mt-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              {errors.passwordMismatch && (
                <div className="text-danger mt-2">Passwords do not match</div>
              )}

              {errors.serverError && (
                <div className="text-danger mt-2">{errors.serverError}</div>
              )}

              <button type="submit" className="btn btn-primary mt-4 w-100">
                Submit
              </button>
            </form>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
