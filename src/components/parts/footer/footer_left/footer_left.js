import React from "react";
import { MDBCol } from "mdbreact";
import * as ReactBootstrap from "react-bootstrap";
import IconItems from "./footer_icons.js";
import "./footer_left.css";


class FooterLeft extends React.Component {
    render() {
        return (
                  <MDBCol md="4" className="text-center">
                    <h1 className="title-web"> Healthy Weight </h1>
                    <h4 id="subtitle"> for a healthier life </h4>
                    <p id="icon">
                    {
                        IconItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a href={item.url}><i className={item.cName}></i>
                                    </a>
                                </li>
                                )
                            }
                        )
                    }
                     </p>
                  </MDBCol>

        );
    }
}

export default FooterLeft;
