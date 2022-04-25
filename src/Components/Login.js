import React from "react";

const Login = () => {
  return (
    <div className="container mt-3">
      <h3>Login Here</h3>
      <form >
          {/* onSubmit={handleSubmit} */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            // value={credentials.email}
            // onChange={onChange}
            id="email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            // value={credentials.password}
            // onChange={onChange}
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
