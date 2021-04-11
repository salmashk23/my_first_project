import React from "react";
import { MDBCol } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";
import "./footer_center.css";


class FooterCenter extends React.Component {
    render() {
        return (
                <MDBCol md="4" className="text-center">
                  <h5 id="link-menu" className="title">Menu</h5>
                  <ul id="footerLinks">
                    <li className="list-unstyled">
                      <a href="/">HOME</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/about">ABOUT US</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/diet_programs">DIET PROGRAMS</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/fitness_programs">FITNESS PROGRAMS</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/articales">ARTICLES</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/register_page">JOIN US</a>
                    </li>
                  </ul>
                </MDBCol>
        );
    }
}

export default FooterCenter;
