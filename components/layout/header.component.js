import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/images/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-white'>
      <div className='toolbar'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <a href='index.html' className='logo'>
                <Image src={Logo} alt='Salud empresarial | Aptus' width={150} height={50} />
              </a>
            </div>
            <div className='col-md-8 d-none d-md-block'>
              <div className='toolbar-right text-right'>
                <div className='media align-items-center d-inline-flex'>
                  <div className='tolbar-icon text-active s-dp-1-3 justify-content-center  rounded-circle'>
                    <i className='icofont icofont-envelope'></i>
                  </div>
                  <div className='media-body'>
                    <a href='mailto:aptustecuida@aptus.pe' className='text-default text-Underline'>
                      <b>aptustecuida@aptus.pe</b>
                    </a>
                  </div>
                </div>
                <div className='media align-items-center d-inline-flex'>
                  <div className='tolbar-icon text-active s-dp-1-3 justify-content-center  rounded-circle'>
                    <i className='icofont icofont-ui-call'></i>
                  </div>
                  <div className='media-body'>
                    <a href='tel:+51980490572' className='text-default h5'>
                      <b>+51 980 490 572</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className='navbar grad-bg--2 s-dp-1-3 navbar-sticky navbar-expand-lg m-navbar bcbd_navbar'>
        <div className='container position-relative'>
          <a href='index.html' className='menu-logo'>
            <Image src={Logo} alt='Salud empresarial | Aptus' width={150} height={50} />
          </a>
          <button className={`burger_menu ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen((prev) => !prev)}>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={`collapse navbar-collapse bcbd_collpase_nav ${isOpen ? 'show_clmenu' : ''}`} id='navbarSupportedContent'>
            <div className='nav_outer mr-auto mx-md-auto'>
              <ul className='navbar-nav bcbd_nav'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Inicio
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#quienes-somos'>
                    Quienes somos
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#servicios'>
                    Servicios
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contacto'>
                    Contacto
                  </a>
                </li>
              </ul>
              <div className='toolbar-right mobile-view text-left d-block d-md-none'>
                <div className='media align-items-center d-inline-flex'>
                  <div className='tolbar-icon text-active s-dp-1-3 justify-content-center  rounded-circle'>
                    <i className='iconfont icofont-envelope'></i>
                  </div>
                  <div className='media-body'>
                    <a href='#' className='text-default text-Underline'>
                      aptustecuida@aptus.pe
                    </a>
                  </div>
                </div>
                <div className='media align-items-center d-inline-flex'>
                  <div className='tolbar-icon text-active s-dp-1-3 justify-content-center  rounded-circle'>
                    <i className='icofont icofont-ui-call'></i>
                  </div>
                  <div className='media-body'>
                    <a href='#' className='text-default'>
                      +51 980 490 572
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
