import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {Link} from "react-router-dom"


const Signup = () => {
  return <>
   <Meta title ={ "Sign Up" }/>
    <BreadCrumb title = "Sign Up"/>

    <div className="login-wrapper py-5 home-wrapper-2 text-center">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
          <h3 style={{ color: 'white', fontSize: '24px' }}>Sign Up</h3>


            <form action="" className='d-flex flex-column gap-15'>
            <div>
                <input 
                type="Text" 
                name='Name'
                placeholder='Name'
                className="form-control"
                
                />
              </div>



              <div>
                <input 
                type="email" 
                name='email'
                placeholder='Email'
                className="form-control"/>
              </div>

              <div>
                <input 
                type="tel" 
                name='mobile'
                placeholder='Mobile Number'
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
                 
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button className="button border-0 ">Sign up</button>                
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Signup