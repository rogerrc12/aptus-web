import React from "react";

export default function Appointment() {
  return (
    <section className="m-pt-135 position-relative set-bg" style={{ marginBottom: 200 }} data-bg="/images/bg-img1.jpg" id="contacto">
      <div className="overlay op-P9"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 position-relative">
            <div className="text-center pb-75">
              <p className="m-0 text-white  text-uppercase">Realiza tu consulta directo con nuestros agentes</p>
              <h2 className="m-0  text-white ">Agenda tu cita</h2>
              <span className="icofont icofont-sound-wave d-inline-block text-white section-wave mt-3"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 perspective--400">
            <div className="appoint-card radius-20 bg-white  position-relative m-pt-70 m-pb-70 s-10-80">
              <img src="/tecuida/images/formulario.webp" alt="Agenda tu cita con nosotros" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <form action="#">
                <div className="row">
                  <div className="col-lg-7 offset-lg-5  col-md-9 offset-md-3">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="form-control m-mb-20" placeholder="Nombre completo:" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control m-mb-20" placeholder="Correo:" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control m-mb-20" placeholder="Teléfono:" />
                      </div>
                      <div className="col-md-6">
                        <div className="position-relative m-mb-20">
                          <label className="position-absolute m-label">
                            <i className="icofont icofont-stethoscope-alt"></i>
                          </label>
                          <select className="js-example-basic-single" name="state">
                            <option value="">¿Quede deseas realizarte?</option>
                            <option value="Department1">Dr. Rojana Rossy</option>
                            <option value="Department1">Dr. Jonathon Jos</option>
                            <option value="Department1">Dr. Katrina Katy</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="pt-2">
                          Puedes conactarnos al:{" "}
                          <a href="#" className="text-active d-inline-block pl-3 fz-poppins">
                            +51 970 564 789
                          </a>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <a
                          href="appointment.html"
                          className="btn fadeInDown-slide animated no-border bg-transparent medim-btn grad-bg--3 solid-btn text-medium radius-pill  text-uppercase text-white"
                        >
                          Agendar cita
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
