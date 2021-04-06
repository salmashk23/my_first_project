import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";
import FooterLeft from "./footer_left/footer_left.js";
import FooterRight from "./footer_right/footer_right.js";
import FooterCenter from "./footer_center/footer_center.js";
import FooterBottom from "./footer_bottom/footer_bottom.js";
import "./footer.css";

class Footer extends React.Component {
    render() {
        return (
            <MDBFooter id="footer" className="font-small pt-4 mt-4">
                  <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                              <FooterLeft/>
                              <FooterCenter/>
                              <FooterRight/>
                        </MDBRow>
                  </MDBContainer>
                  <FooterBottom/>
             </MDBFooter>
        );
    }
}

export default Footer;
