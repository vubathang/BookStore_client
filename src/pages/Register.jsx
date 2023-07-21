import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <div className="row rounded shadow">
        <div className="col-md-6 bg-img rounded-start position-relative"></div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="input-box">
            <h3 className='fw-semibold mb-4 text-center'>Register</h3>
            <div className="input-field">
              <input type='text' id='username' className='input' required autoComplete='off'/>
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input type='email' id='email' className='input' required autoComplete='off'/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input type='password' id='password' className='input' required autoComplete='off'/>
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
              <input type='password' id='cfpassword' className='input' required autoComplete='off'/>
              <label htmlFor="cfpassword">Confirm password</label>
            </div>
            <div className="input-field">
              <button className='btn btn-primary mb-3'>Register</button>
            </div>
            <span className='fs-6 px-4'>Do you have an account? <Link className='text-decoration-none text-danger' to='/login'>Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
