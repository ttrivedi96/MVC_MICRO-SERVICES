import React from 'react'

const Signup = () => {
  return (
    <div className="container mt-3">
    <h3>SignUp Here</h3>
    <form >
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control"  name="name" id="name" required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control"  name="email" id="email" required />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control"  name="password" id="password" minLength={5} required />
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control"  name="cpassword" id="cpassword" minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">SignUp</button>
    </form>
</div>
  )
}

export default Signup