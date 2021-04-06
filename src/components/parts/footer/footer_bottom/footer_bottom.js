import React from "react";
import { MDBContainer } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";


class FooterBottom extends React.Component {
    render() {
        return (
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#!" className="text-white"> HealthyWeight.com </a>
              </MDBContainer>
            </div>
        );
    }
}

export default FooterBottom;
