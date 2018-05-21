import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Col, Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const Homepage = () => {
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
                        <Col xs={12} sm={4} md={4} lg={4}  >
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
                                <div className="inner-title">About Me</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={10} xs={10} m={10} sm={10} xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1} >
                                <div className="hr" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <div className="line"></div>
                            </Col>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <Col lg={10} md={10} sm={10} xs={12}>
                                <div className="img-responsive">
                                    <img className="myPicture" src={ require('../assets/images/me.png') } />
                                </div>
                                <div className="text">
                                    <p>Hey everyone! My name is Nick, I am an engineer working and living in Philadelphia. </p>
                                    <p>This page and the projects linked here were built mainly with React and React Router, with a few Ruby on Rails applications thrown in </p>
                                    <p>In my free time I enjoy being outdoors, hiking, swimming, etc. I am a big fan of traveling as well. Please feel free to poke around. Send me a message! </p>
                                    <p>Here's some fillter text for the sake of symmetry</p>
                                    <p>Fusce at urna convallis, molestie libero a, tempus tortor. Nulla facilisi. Phasellus quam tortor, dapibus vitae arcu nec, venenatis vestibulum libero. Maecenas gravida dolor ut nisi accumsan vestibulum eu laoreet nunc. Phasellus vel nunc posuere, facilisis orci sit amet, feugiat arcu. Maecenas ullamcorper lacus lacus, ut accumsan purus facilisis nec. Nulla egestas eleifend elit, at suscipit orci. Morbi porta facilisis cursus. Vivamus iaculis ante id augue pharetra, at vehicula neque facilisis. Vestibulum nec est nec nunc tempor pulvinar. Vivamus ac sodales tellus. Maecenas quis efficitur nunc, id cursus sem.</p>
                                </div>
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

export default Homepage;

