import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Auth from '../auth/Auth.js'
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed:true
    }
    this.auth = new Auth();
  }

  navBarToggleClick = (event) => {
    this.setState({
      collapsed:this.state.collapsed ? false : true
    });
  }

  navLinkClick = (event) => {
    this.setState({
      collapsed:true
    });
  }

  login = (event) => {
    this.auth.login();
  }

  render() {

    let collapsedClass = "collapse";

    if(!this.state.collapsed) {
      collapsedClass = "";
    }
    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
        <Link to="/" className="navbar-brand" onClick={this.navLinkClick}>
          <img className="sbc-navbar-logo" src="/img/logo_menu.png" srcSet="/img/logo_menu.png" alt="IBHER Pueblo Nuevo"/>
        </Link>

        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsedClass+" navbar-collapse sbc-navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Historia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Descargas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Vivos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/giving" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Donaciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/word-for-the-way" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Obras Misioneras</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};




export default Header;
