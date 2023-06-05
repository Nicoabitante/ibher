import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css'


const ContactPage = (props) => {
  return (
    <Page>
      <Map fullWidth={true}/> 
      <div className="contact-page">
        <br/>
        <p>
          IBHER Pueblo Nuevo <br/>
          508 entre 30 y 31<br/>
          Hernandez, La Plata, Buenos Aires, Argentina<br/>
        </p>
        <br/>
        <a href="mailto:ibherpnsecretaria@gmail.com"><i className="far fa-envelope"></i> Nuestro Email</a>
      </div>
    </Page>
  )
}

export default ContactPage;
