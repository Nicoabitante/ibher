import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/about">Historia</Link><span className="footer-link-slash">/</span>
          <Link to="/sermons">Descargas</Link><span className="footer-link-slash">/</span>
          <Link to="/contact">Contacto</Link><span className="footer-link-slash">/</span>
          <Link to="/live">Vivos</Link>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>IBHER Pueblo Nuevo<br/>508 entre 30 y 31 Hernandez, La Plata, Buenos Aires, Argentina<br/>2023 &copy; IBHER Pueblo Nuevo</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">SEGUI CONECTADO</p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/people/Iglesia-Pueblonuevo-Hernandez/100013519995455/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/iglesiapueblonuevohernandez/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
            <img alt="footer-logo" srcSet="img/footer-logo.png" className="footer-logo float-right" src="img/footer-logo.png"/>
          </div>
        </div>
      </div>
    )
};

export default Footer;
