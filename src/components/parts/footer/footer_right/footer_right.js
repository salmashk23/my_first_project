import React from "react";
import { MDBCol } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";
import "./footer_right.css";


class FooterRight extends React.Component {
    render() {
        return (
                <MDBCol md="4" className="text-center">
                  <h5 className="title" id="contact"> <a href="/contact_us"> COMTACT US </a> </h5>
                  <p class="mb-0">
                      <i class="fa fa-phone mr-3"></i>
                      052-666-5000
                  </p>
                  <p>
                      <i class="fa fa-envelope-o mr-3"></i>
                      HealthyWeight@gmail.com
                  </p>
                </MDBCol>
        );
    }
}

export default FooterRight;
