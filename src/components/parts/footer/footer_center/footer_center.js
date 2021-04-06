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
                      <a href="#!">HOME</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">ABOUT US</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">DIET PROGRAMS</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">FITNESS PROGRAMS</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">ARTICLES</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">JOIN US</a>
                    </li>
                  </ul>
                </MDBCol>
        );
    }
}

export default FooterCenter;
