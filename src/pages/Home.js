import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                <div>
                <h6>Laptops</h6>
                  
               </div>
                <img src="image/laptops.jpg" alt="laptop" style={{ width: '200px', height: '200px' }} />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                <div style={{ marginLeft: '20px' }}>
                 <h6>Desktops</h6>
                    
                  </div>
                  <img src="image/desktops.jpg" alt="desktop" style={{ width: '200px', height: '200px' }} />
        
                </div>
                <div className='d-flex gap-30 align-items-center'>
                <div style={{ marginLeft: '20px' }}>
                 <h6>Monitors</h6>
                   
                  </div>
                  <img src="image/monitors.jpg" alt="monitor" style={{ width: '200px', height: '200px' }} />
        
                </div>
                <div className='d-flex gap-30 align-items-center'>
                <div style={{ marginLeft: '20px' }}>
                 <h6>GRAPHICS CARDS</h6>
                    
                  </div>
                  <img src="image/videocards.jpg" alt="GRAPHICS-CARDS" style={{ width: '200px', height: '200px' }} />
        
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
