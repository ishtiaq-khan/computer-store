import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

export const Forgotpassword = () => {
  return <>
  <Meta title = {"Forgot Password"} />
  <BreadCrumb title = "Forgot Password" />

  <div className="login-wrapper py-5 home-wrapper-2 text-center">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
          <h3 style={{ color: 'white', fontSize: '24px' }}>Reset Your Password</h3>
            <p className="text-center mt-2 mb-3">Please enter your email address. 
            </p>

            <form action="" className='d-flex flex-column gap-15'>
              <div>
                <input 
                type="email" 
                name='email'
                placeholder='Email'
                className="form-control"/>
              </div>
              
              <div>
                
                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                <button className="button border-0" type="Submit">Submit </button>                
                   <Link to="/Login" >Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </>
}
