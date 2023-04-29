import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { useNavigate } from "react-router";

const Signup = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", email: "", phone:"", password: "" });
    navigate("/");
  }

  return <>
   <Meta title ={ "Sign Up" }/>
    <BreadCrumb title = "Sign Up"/>
    <div>
    <div className="form-group">
      <div className="login-wrapper py-5 home-wrapper-2 text-center">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 style={{ color: 'white', fontSize: '24px' }}>Sign Up</h3>
                
      <form onSubmit={onSubmit}>

        <div className='d-flex flex-column gap-15'>
          <div>
            <input 
              type="Text" 
              name='Name'
              placeholder='Name'
              className="form-control"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>

          <div>
            <input 
              type="email" 
              name='email'
              placeholder='Email'
              className="form-control"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>

          <div>
            <input 
              type="tel" 
              name='mobile'
              placeholder='Mobile Number'
              className="form-control"
              value={form.phone}
              onChange={(e) => updateForm({ phone: e.target.value })}
            />
          </div>


          <div className='mt-1'>
            <input
              type="password" 
              name='password'
              placeholder="Password" 
              className="form-control"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
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
  </>
}

export default Signup