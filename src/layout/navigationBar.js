import React from "react";
import {
  HashRouter,
  NavLink,
  Redirect,
} from "react-router-dom";
// import classes from './navigationBar.css'


const NavigationBar = (props) => {
  return (
    <div>
      <HashRouter>
          <div>
            <h3>love eat local</h3>
                    <li>
            <ul>
                      <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
                        {/* <NavLink to="/about" activeClassName="is-active" exact={false}>About Us </NavLink> */}
                        <NavLink to="/contact" activeClassName="is-active" exact={false}>Contact Us </NavLink>
                        <NavLink to="/gallery" activeClassName="is-active" exact={false}>Gallery </NavLink>
                        <NavLink to="/store" activeClassName="is-active" exact={false}>Store </NavLink>
                        <NavLink to="/testimonials" activeClassName="is-active" exact={false}>Testimonials </NavLink>
                        <NavLink to="/privateEvents" activeClassName="is-active" exact={false}>Private Events </NavLink>
                        <NavLink to="/manage" activeClassName="is-active" exact={false}>LEL Manager </NavLink>
            </ul>
                    </li>
          </div>
      </HashRouter>
    </div>
  );
};

export default NavigationBar;
