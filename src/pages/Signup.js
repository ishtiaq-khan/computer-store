import React, { Component } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { name, email, phone, password } = this.state;
    console.log( name, email, phone, password );
    fetch("http://localhost:8000/register", {
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({
        name,
        email, 
        phone,
        password
      }),
    }).then((res)=>res.json)
    .then((data)=>{console.log(data, "userRegister")})

  }

  render(){
  return ( <>
   <Meta title ={ "Sign Up" }/>
    <BreadCrumb title = "Sign Up"/>
    <div>
    <div className="form-group">
      <div className="login-wrapper py-5 home-wrapper-2 text-center">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 style={{ color: 'white', fontSize: '24px' }}>Sign Up</h3>
                
      <form onSubmit={this.handleSubmit}>

        <div className='d-flex flex-column gap-15'>
          <div>
            <input 
              type="Text" 
              name='Name'
              placeholder='Name'
              className="form-control"
              onChange={e=>this.setState({name: e.target.value})}
            />
          </div>

          <div>
            <input 
              type="email" 
              name='email'
              placeholder='Email'
              className="form-control"
              onChange={e=>this.setState({email: e.target.value})}
            />
          </div>

          <div>
            <input 
              type="tel" 
              name='mobile'
              placeholder='Mobile Number'
              className="form-control"
              onChange={e=>this.setState({phone: e.target.value})}
            />
          </div>


          <div className='mt-1'>
            <input
              type="password" 
              name='password'
              placeholder="Password" 
              className="form-control"
              onChange={e=>this.setState({password: e.target.value})}
            />
          </div>

          <div>
            <div className="form-group">
              <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />          
              </div>
            </div>
          </div>
        </div>

      </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>)
}
}