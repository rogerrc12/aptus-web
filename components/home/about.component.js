import React from "react";

export default function About() {
  return (
    <section className="m-pt-140 m-pb-70 about-area type-1 position-relative" id="quienes-somos">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 xs-mb-20">
            <h2 className="text-dark mb-0 semi-bold pb-5">Quíenes somos</h2>
            <p className="mb-4">
              Somos una empresa que ha acompañado a los empresarios y gerentes como aliado estratégico para ayudar a gestionar los beneficios y riesgos de la salud en la empresa.
              Ahora APTUS se convierte en un recurso a disposición no solo para las empresas sino para el público en general, llevando toda la experiencia y respaldo de años.
            </p>
            <a
              href="contact.html"
              className="btn fadeInDown-slide animated no-border bg-transparent medim-btn grad-bg--3 solid-btn mt-4 text-medium radius-pill text-active text-uppercase text-white"
            >
              Contáctanos
            </a>
          </div>
          <div className="col-lg-7 offset-lg-1 col-md-8">
            <div className="row">
              <div className="col-sm-6">
                <div className="m-mb-60 features-wraper">
                  <div className="features-circle mb-3 m-bg-3 text-active d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="icofont icofont-first-aid"></i>
                  </div>
                  <h4 className="m-text-2 mb-3 mt-2">Especialistas calificados</h4>
                  <p>Encuentra el profesional de salud indicado para atenderte.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="m-mb-60 features-wraper">
                  <div className="features-circle mb-3 m-bg-3 text-active d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="icofont icofont-doctor-alt"></i>
                  </div>
                  <h4 className="m-text-2 mb-3 mt-2">Atención especializada</h4>
                  <p>Estamos para atenderte a través de todos nuestros canales.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="m-mb-60 features-wraper">
                  <div className="features-circle mb-3 m-bg-3 text-active d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="icofont icofont-clock-time"></i>
                  </div>
                  <h4 className="m-text-2 mb-3 mt-2">Innovación</h4>
                  <p>Tenemos la mejor tecnología para poder atender los requerimientos que necesitas.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="m-mb-60 features-wraper">
                  <div className="features-circle mb-3 m-bg-3 text-active d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="icofont icofont-ambulance-cross"></i>
                  </div>
                  <h4 className="m-text-2 mb-3 mt-2">Excelencia</h4>
                  <p>Nuestro equipo tiene un alto nivel de profesionalismo, la cual experimentarás en cualquiera de nuestros servicios..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
