import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Login = () => {
  return(
    <>    
    <Meta title ={ "Login" }/>
    <BreadCrumb title = "Login"/>
    
    <div className="login-wrapper py-5 home-wrapper-2 text-center">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
          <h3 style={{ color: 'white', fontSize: '24px' }}>Login</h3>


            <form action="" className='d-flex flex-column gap-15'>
              <div>
                <input 
                type="email" 
                name='email'
                placeholder='Email'
                className="form-control"/>
              </div>
              <div className='mt-1'>
               <input
                type="password" 
                name='password'
                placeholder="Password" 
                className="form-control"/>
              </div>
              <div>
                <Link to="/Forgot-password" >Forgot Password?</Link>
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button className="button border-0 login-button " type="submit">Login</button>                
                  <Link to ="/signup" className='button signup-button'>Signup</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
