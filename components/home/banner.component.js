import React from 'react';

export default function Banner() {
  return (
    <div className='bg-banner banenr position-relative type-1 no-overflows'>
      <div className='circle'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>
      <div className='container position-relative'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='banenr-slider'>
              <div className='single-banenr-slide'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h6 className='ml12 text-white text-uppercase fadeInDown-slide animated'>Velamos por tu bienestar</h6>
                    <h1 className='text-white font-weight-bold mb-4 fadeInDown-slide animated'>APTUS te cuida</h1>
                    <p className='text-white fadeInDown-slide animated'>Nos adelantamos a los problemas potenciales al promover conductas saludables.</p>
                    <div className='xs-flex'>
                      <a
                        href='#quienes-somos'
                        className='btn fadeInDown-slide animated  medim-btn btn-bordered-white mt-4 text-medium radius-pill bg-transparent text-active text-uppercase text-white'
                      >
                        Sobre nosotros
                      </a>
                      <a
                        href='#contacto'
                        className='btn fadeInDown-slide animated no-border bg-transparent medim-btn grad-bg--3 solid-btn mt-4 text-medium radius-pill text-active text-uppercase text-white'
                      >
                        Agendar cita
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
