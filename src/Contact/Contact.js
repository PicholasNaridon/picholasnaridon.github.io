import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Col, Row, Navbar, Nav, NavItem, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <div class="outter">
                <Grid fluid={true} className="topBorder">
                    <Row className="navbar">
                        <Col xs={12} sm={4} md={4} lg={2}>
                            <div className="navbar-title">
                                Nick Paridon
                            </div>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <div className="navbar-links">
                                <ul >
                                    <li><Link className="links" to="/">About Me </Link></li>   
                                    <li><Link className="links" to="/Portfolio">Portfolio </Link></li> 
                                    <li><Link className="links" to="/Contact">Contact</Link></li>   
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <div className="container">
                    <Grid className="lower-grid">
                        <Row>
                            <Col xs={12} lg={6} md={6} sm={6}>
                                <div className="inner-title">Contact</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={10} xs={10} m={10} sm={10} xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1} >
                                <div className="hr" />
                            </Col>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <Col lg={10} md={10} sm={10} xs={12}>
                                <Form >
                                    <div className="form-label"> Name </div>
                                    <FormGroup controlId="formControlsText">
                                        <FormControl componentClass="text" placeholder="Name" />
                                    </FormGroup>
                                    <div className="form-label"> Email </div>
                                    <FormGroup controlId="formControlsEmail">
                                        <FormControl componentClass="email" placeholder="Email" />
                                    </FormGroup>
                                    <div className="form-label"> Message </div>
                                    <FormGroup controlId="formControlsTextarea">
                                        <FormControl componentClass="textarea" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button bsStyle="primary" style={{backgroundColor: "#4aaaa5"}} bsSize="large" block>
                                        Submit
                                        </Button>
                                    </FormGroup>
                                </Form>;
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            <Navbar fixedBottom={true} className="footer">
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                </div>
            </Navbar>
        </div>
    );
};

export default Contact;


