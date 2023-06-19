import Image from 'next/image';
import React from 'react';
import Logo from '../../public/images/logo.svg';

export default function Footer() {
  return (
    <footer className='m-pt-140'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='footer-widget'>
              <div className='logo'>
                <a href='index.html' className='d-inline-block mb-5'>
                  <Image src={Logo} alt='Salud empresarial | Aptus' width={150} height={50} />
                </a>
              </div>
              <p>APTUS se convierte en un recurso a disposición no solo para las empresas sino para el público en general, llevando toda la experiencia y respaldo de años.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-widget'>
              <h5 className='text-dark footer-widget-title'>Contacto</h5>
              <div className='media text-light-dark mb-3'>
                <i className='icofont icofont-ui-touch-phone mr-2 mt-2 '></i>
                <div className='media-body'>
                  <a href='tel:+51980490572' className='m-0  fz-poppins'>
                    +51 980 490 572
                  </a>
                  <a href='mailto:aptustecuida@aptus.pe'>
                    <p className='m-0 fz-poppins'>aptustecuida@aptus.pe</p>
                  </a>
                </div>
              </div>
              <div className='media text-light-dark'>
                <i className='icofont icofont-location-pin mr-2 mt-2 text-light-dark'></i>
                <div className='media-body'>
                  <p className='m-0  fz-poppins'>Av Javier Prado Oeste 2340,</p>
                  <p className='m-0  fz-poppins'>Magdalena del Mar 15076</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='footer-widget'>
              <h5 className='text-dark footer-widget-title'>Newsletter</h5>
              <p>Suscríbete , mantente al día sobre nuestros servicios y promociones.</p>
              <div className='input-group  d-flex align-items-center'>
                <input type='text' className='form-control' placeholder='Ingresa tu correo' aria-label='Enter mail' aria-describedby='button-addon2' />
                <div className='input-group-append'>
                  <button className='btn' type='button' id='button-addon2'>
                    <i className='icofont icofont-paper-plane'></i>
                  </button>
                </div>
              </div>
              {/* <div className="social-icon circle-link position-relative">
                <a href="#" className="text-default rounded-circle s-dp-1-3-15">
                  <i className="icofont icofont-facebook"></i>
                </a>
                <a href="#" className="text-default rounded-circle s-dp-1-3-15">
                  <i className="icofont icofont-twitter"></i>
                </a>
                <a href="#" className="text-default rounded-circle s-dp-1-3-15">
                  <i className="icofont icofont-instagram"></i>
                </a>
                <a href="#" className="text-default rounded-circle s-dp-1-3-15">
                  <i className="icofont icofont-pinterest"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom text-center m-mt-120 m-bg-1 pt-4 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='mb-1 mt-1'>APTUS &copy; 2022. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
