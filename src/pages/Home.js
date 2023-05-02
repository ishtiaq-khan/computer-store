import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <Link to="/laptops">
                  <h6>Laptops</h6>
                  <img src="image/laptops.jpg" alt="laptop" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <Link to="/desktops">
                  <h6>Desktops</h6>
                  <img src="image/desktops.jpg" alt="desktop" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <Link to="/monitors">
                  <h6>Monitors</h6>
                  <img src="image/monitors.jpg" alt="monitor" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-50 align-items-center'>
                  <Link to="/gpus">
                  <h6>Graphics Cards</h6>
                  <img src="image/videocards.jpg" alt="GRAPHICS-CARDS" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <Link to="cpus">
                  <h6>Processors</h6>
                  <img src="image/processor.png" alt="processor" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-40 align-items-center'>
                  <Link to="ram">
                  <h6>Memory</h6>
                  <img src="image/memory.jpg" alt="memory" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-50 align-items-center'>
                  <Link to="mobo">
                  <h6>Motherboards</h6>
                  <img src="image/motherboard.jpg" alt="motherboard" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                <div className='d-flex gap-60 align-items-center'>
                  <Link to="drives">
                  <h6>Hard Drives</h6>
                  <img src="image/drives.jpg" alt="Hard-Drive" style={{ width: '150px', height: '150px' }} />
                  </Link>
                </div>
                
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
