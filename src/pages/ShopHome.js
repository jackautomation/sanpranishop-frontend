import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ShopHome() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Mock validation
      if (username === "admin" && password === "admin123") {
        navigate("/shopping"); // navigate to MenuPage on success
      } else {
        alert("Invalid username or password!");
      }
    };
  
    return (
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">SanPrani Shopping Login</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow p-4">
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-decoration-none">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ShopHome;