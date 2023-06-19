import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default function Appointment() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const appendSpreadsheet = async (row) => {
    setLoading(true);

    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) return;

    const elements = e.target.elements;

    const newRow = {
      Nombre: `${elements.firstName.value} ${elements.lastName.value}`,
      Correo: elements.email.value,
      Telefono: formValues.phone,
      Edad: elements.age.value,
      Servicio: elements.category.value,
      'Fecha contacto': new Date().toLocaleString(),
    };

    try {
      const token = await executeRecaptcha();
      if (!token) throw new Error('No se ha completado el captcha correctamente.');
      await appendSpreadsheet(newRow);
      setSent(true);
    } catch (err) {
      console.log(err);
      setError('Ha ocurrido un error intetando agengar, por favor intenta más tarde');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  return (
    <section className='m-pt-135 position-relative set-bg' style={{ marginBottom: 200 }} data-bg='/images/bg-img1.jpg' id='contacto'>
      <div className='overlay op-P9'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 position-relative'>
            <div className='text-center pb-75'>
              <p className='m-0 text-white  text-uppercase'>Realiza tu consulta directo con nuestros agentes</p>
              <h2 className='m-0  text-white '>Agenda tu cita</h2>
              <span className='icofont icofont-sound-wave d-inline-block text-white section-wave mt-3'></span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 perspective--400'>
            <div className='appoint-card radius-20 bg-white  position-relative m-pt-70 m-pb-70 s-10-80'>
              <img src='/tecuida/images/formulario.webp' alt='Agenda tu cita con nosotros' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              <form action='#' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-lg-7 offset-lg-5  col-md-9 offset-md-3'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input
                          type='text'
                          name='firstName'
                          className='form-control m-mb-20'
                          placeholder='Nombre completo:'
                          value={formValues.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className='col-md-6'>
                        <input type='text' name='lastName' className='form-control m-mb-20' placeholder='Apellidos:' value={formValues.lastName} onChange={handleChange} required />
                      </div>
                      <div className='col-md-6'>
                        <input type='text' name='email' className='form-control m-mb-20' placeholder='Correo:' value={formValues.email} onChange={handleChange} required />
                      </div>
                      <div className='col-md-6'>
                        <PhoneInput
                          country={'pe'}
                          value={formValues.phone}
                          onChange={handlePhoneChange}
                          inputClass='form-control m-mb-20 w-100'
                          inputStyle={{ height: 48, fontSize: 16 }}
                          inputProps={{ required: true }}
                        />
                      </div>
                      <div className='col-md-6'>
                        <input type='number' name='age' className='form-control m-mb-20' placeholder='Edad:' value={formValues.age} onChange={handleChange} required />
                      </div>
                      <div className='col-md-6'>
                        <div className='position-relative m-mb-20'>
                          <label className='position-absolute m-label'>
                            <i className='icofont icofont-stethoscope-alt'></i>
                          </label>
                          <select className='js-example-basic-single border p-2' name='category' value={formValues.category} onChange={handleChange}>
                            <option value=''>¿Que servicio deseas?</option>
                            <option value='Control de Hipertensión'>Control de Hipertensión</option>
                            <option value='Perfil lipídico'>Perfil lipídico</option>
                            <option value='Perfil hepático'>Perfil hepático</option>
                            <option value='Perfil renal'>Perfil renal</option>
                            <option value='Perfil lipídico'>Perfil lipídico</option>
                            <option value='Perfil tiroideo'>Perfil tiroideo</option>
                            <option value='Perfil prenatal'>Perfil prenatal</option>
                            <option value='Perfil mujer +40'>Perfil mujer +40</option>
                            <option value='Nutrición'>Nutrición</option>
                            {/* <option value='Terapia física'>Terapia física</option>
                            <option value='Odontología'>Odontología</option> */}
                            <option value='Psicología'>Psicología</option>
                            <option value='Medicina general'>Medicina general</option>
                            <option value='Oftalmología'>Oftalmología</option>
                            {/* <option value='Cardiología'>Cardiología</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p className='pt-2'>
                          Puedes conactarnos al:{' '}
                          <a href='https://bit.ly/3E6ih8I' target='_blank' rel='noreferrer' className='text-active d-inline-block pl-3 fz-poppins'>
                            +51 980 490 572
                          </a>
                        </p>
                      </div>
                      <div className='col-md-6'>
                        <button
                          type='submit'
                          className='btn fadeInDown-slide animated no-border bg-transparent medim-btn grad-bg--3 solid-btn text-medium radius-pill  text-uppercase text-white'
                          disabled={loading || Object.values(formValues).filter((value) => value)?.length < 6}
                        >
                          {!loading ? 'Agendar cita' : sent ? 'Cita agendada' : 'Enviando...'}
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className='alert alert-danger' role='alert'>
                        {error}
                      </div>
                    )}

                    {sent && (
                      <div className='alert alert-success' role='alert'>
                        Hemos recibido tu cita correctamente. Pronto nos contactaremos con usted.
                      </div>
                    )}
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
