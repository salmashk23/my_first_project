import React from "react";
import ReactDOM from 'react-dom';
import { Container, Button, Input, FormGroup , Col, Row, Form, Label } from 'reactstrap';
import ContactItems from "./contact_items.js"
import './content_contact.css';


const FormPage = () => {
return (
        <Container className=" justify-content-center">
              <Form validated>
                    <FormGroup id="contact-form" className="  text-white p-5 mt-5 text-center" >
                        <h3 className="h2 text-center mb-4 display-3"> GET IN TOUCH </h3>
                        <h3 class=" text-center mb-5 " >We would love to hear from you !</h3>
                            {
                                ContactItems.map((item, index) => {
                                    return(
                                        <div key={index} className="mb-4 mt-4 ">
                                            <Label>{item.label}</Label>
                                            <Input
                                                type={item.type}
                                                rows={item.rows}
                                                placeholder={item.placeholder}
                                                required={item.required}
                                            />
                                        </div>
                                        )
                                    }
                                )
                            }
                        <div className="text-center mt-5 " id="send">
                              <Button outline color="light">
                                  Send
                              </Button>
                        </div>
                    </FormGroup>
                </Form>
        </Container>
);
};

export default FormPage;
