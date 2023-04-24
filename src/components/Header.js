import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0"> Free shipping over $200</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Khan, Luna, Mazumders
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2">
              <h2>
                <Link className='text-white'>Computer </Link>
              </h2>
            </div>
            <div className="col-5">

              <div className="input-group">
                <input type="text"
                  class="form-control py-2"
                  placeholder="Hi, what can we help you find today?"
                  aria-label="Hi, what can we help you find today?"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-5' />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white header-link'>
                    <img src="image/compare.svg" alt="compare" />
                    <p className='mb-0'>
                      Build <br /> products
                    </p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white header-link'>
                    <img src="image/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>
                      Favourite <br /> wishlist </p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white  '>
                    <img src="image/user.svg" alt="user" />
                    <p className='mb-0'> login in <br />My Account</p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-15 text-white  header-link'>
                    <img src="image/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$1500</p>

                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className="container-xxl">
          <div className='row'>
            <div className="col-12">
              <div className="menu-button d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"> 
                     
                     <img src="image/menu1.svg" alt=""/>
                      <span className='me-5 d-inline-block'>Products</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Laptop</NavLink>
                    <NavLink to="Blogs">Dekstop</NavLink>
                    <NavLink to="/contact">PC Gaming</NavLink>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header