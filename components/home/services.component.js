import React from "react";
import { Nav, Tab } from "react-bootstrap";

export default function Services() {
  return (
    <section className="m-bg-1 intro-area type-1 position-relative" id="servicios">
      <div className="intro-overlay position-absolute set-bg" data-bg="/images/intro-bg.jpg"></div>
      <div className="overlay"></div>
      <Tab.Container defaultActiveKey="first">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="department-tab-pill m-pt-140 m-pb-140 position-relative">
                <h2 className="text-white pb-md-5">Nuestros servicios</h2>
                <Nav variant="pills" className="flex-column pt-md-0">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <i className="icofont icofont-heart-beat-alt"></i>
                      <span>Control de Hipertensión</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <i className="icofont icofont-dna-alt-1"></i>
                      <span>Perfiles de laboratorio</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <i className="icofont icofont-dna-alt-1"></i>
                      <span>Perfil Prenatal</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      <i className="icofont icofont-dna-alt-1"></i>
                      <span>Perfil Hombre +40</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">
                      <i className="icofont icofont-dna-alt-1"></i>
                      <span>Perfil Mujer +40</span>
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="sixth">
                      <i className="icofont icofont-dna-alt-1"></i>
                      <span>Especialidades</span>
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </div>
            </div>
            <div className="col-md-8">
              <Tab.Content className="m-pt-140 m-pb-140">
                <Tab.Pane eventKey="first">
                  <h4 className="m-text-2 ">Control de la hipertensión</h4>
                  <p className="m-mb-30">
                    La hipertensión arterial es el principal factor de riesgo corregible de las enfermedades cardiovasculares y, a nivel mundial, afecta a más de mil millones de
                    personas y causa más de diez millones de muertes evitables cada año.
                  </p>

                  <p>
                    El Control de Hipertensión como atención primaria de salud, está dirigida a mejorar la prevención y la atención de las enfermedades cardiovasculares (ECV),
                    ayudando a la reducción de morbilidad a causa del descontrol de la hipertensión.
                    <br />
                    Incluye:
                  </p>

                  <ul>
                    <li>Colesterol total</li>
                    <li>Creatinina</li>
                    <li>Examen completo de orina</li>
                    <li>Hemograma</li>
                    <li>Hemoglobina glicosilada</li>
                    <li>Glucosa</li>
                    <li>Triglicéridos</li>
                    <li>Consulta entrega resultados</li>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h4 className="m-text-2 ">Perfiles de laboratorio</h4>
                  <p className="m-mb-30">
                    El propósito principal de los exámenes de laboratorio es es ayudar a los especialistas y médicos a confirmar o descartar enfermedades, a fin de obtener
                    resultados confiables y establecer un pronóstico de la salud al paciente. Entre los diferentes perfiles de laboratorio tenemos:
                  </p>

                  <ul>
                    <li>
                      <b>Perfil lipídico</b>
                    </li>
                    <p>
                      Nos permite medir el nivel de las diferentes fracciones de colesterol en sangre. A partir de los 40 años ayuda a calcular un riesgo para desarrollar un
                      posible problema cardiovascular a futuro y prevenirlo. Dentro de este perfil es posible detectar alteraciones en triglicéridos (otro tipo de lípidos que
                      pueden causar alteraciones cardiovasculares y en el metabolismo de la glucosa).
                    </p>
                    <li>
                      <b>Perfil hepático</b>
                    </li>
                    <p>Nos permite detectar alteraciones o enfermedades del hígado tanto obstructivas como inflamatorias.</p>
                    <li>
                      <b>Perfil renal</b>
                    </li>
                    <p>Nos permite detectar enfermedades renales o el riesgo para desarrollarlas en base al cálculo de función renal.</p>
                    <li>
                      <b>Perfil tiroideo</b>
                    </li>
                    <p>Nos permite detectar hipotiroidismo o probabilidad de cáncer de tiroides. </p>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h4 className="m-text-2 ">Perfil prenatal</h4>
                  <p className="m-mb-30">
                    Los exámenes prenatales permiten establecer el riesgo si el bebé es portador o afectado por una alguna enfermedad.También se pueden detectar malformaciones,
                    entre las más frecuentes se incluyen el labio leporino, las cardiopatías congénitas severas, entre otras.
                  </p>

                  <p>
                    Los estudios prenatales también nos permiten preparar el nacimiento programado para contar con la tecnología médica disponible y necesaria para darle todas las
                    posibilidades a ese recién nacido.
                    <br />
                    Incluye:
                  </p>

                  <ul>
                    <li>Glucosa</li>
                    <li>Hemoglobina</li>
                    <li>Grupo factor RH</li>
                    <li>Examen completo de orina</li>
                    <li>VIH</li>
                    <li>Sífilis</li>
                    <li>Consulta entrega resultados</li>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h4 className="m-text-2 ">Perfil hombre +40</h4>
                  <p className="m-mb-30">
                    Perfil creado para el cuidado de Hombres mayores a 40 años, donde la prevención y el control es necesario para detectar enfermedades a tiempo, (para hombres las
                    pruebas de detección de cáncer de próstat entre otras). Lo principal es ayudar a detectar problemas de salud en una etapa temprana, lo que aumenta las
                    posibilidades de un tratamiento exitoso.
                    <br />
                    Incluye:
                  </p>

                  <ul>
                    <li>Consulta medicina general</li>
                    <li>Hemograma</li>
                    <li>Glucosa</li>
                    <li>Urea</li>
                    <li>Creatinina</li>
                    <li>Acido úrico</li>
                    <li>Colesterol total</li>
                    <li>Triglicéridos</li>
                    <li>PSA</li>
                    <li>Examen completo de orina</li>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h4 className="m-text-2 ">Perfil mujer +40</h4>
                  <p className="m-mb-30">
                    Perfil creado para el cuidado de Mujeres mayores a 40 años, donde la prevención y el control es necesario para detectar enfermedades a tiempo, (para mujeres
                    detección de cáncer de mama). Lo principal es ayudar a detectar problemas de salud en una etapa temprana, lo que aumenta las posibilidades de un tratamiento
                    exitoso.
                    <br />
                    Incluye:
                  </p>

                  <ul>
                    <li>Consulta medicina general</li>
                    <li>Hemograma</li>
                    <li>Glucosa</li>
                    <li>Urea</li>
                    <li>Creatinina</li>
                    <li>Acido úrico</li>
                    <li>Calcio</li>
                    <li>Estradiol</li>
                    <li>Prolactina</li>
                    <li>Progesterona</li>
                    <li>FSH y LM</li>
                    <li>Examen completo de orina</li>
                  </ul>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="sixth">
                  <h4 className="m-text-2 ">Especialidades</h4>
                  <p className="m-mb-30">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </p>

                  <ul>
                    <li>Nutrición</li>
                    <li>Terapia física</li>
                    <li>Odontología</li>
                    <li>Psicología</li>
                    <li>Medicina general</li>
                    <li>Oftalmología</li>
                    <li>Cardiología</li>
                  </ul>
                </Tab.Pane> */}
              </Tab.Content>
            </div>
          </div>
        </div>
      </Tab.Container>
    </section>
  );
}
