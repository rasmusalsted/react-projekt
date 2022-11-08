
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import Navigation from "../../components/ui/Navigation";
import NavigationDesktop from "../../components/ui/NavigationDesktop"

import M2 from "../../assets/images/m2.png"
import D2 from "../../assets/images/d2.png"
import logoA from "../../assets/images/logo-a.png"

const Maintainable = () => {

    return (

        <div className="maintainable-bg">
            <Container className="d-md-none">
                <Row>
                    <Navigation />
                </Row>
                <Row>
                    <img className="cover" src={M2} alt="" />
                </Row>
                <Row>
                    <h1>Keeping you all <span className="maintain-h1">upto date</span> ...</h1>
                </Row>
                <Row>
                    <article>
                        <p>But i must explain how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system, and expound the adua teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids plasure itself, because it is pleasure, but because those who do not know hot to pursue pleasure rationally encounter qounsequences that are.</p>
                        <p>But i must explain to you how all this mistaken idea of denouncing pleasure anc praising pain was born and i will give you a complete account of the system, and expound te actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    </article>
                </Row>
                <Row className="logo-row">
                    <img className="logo-a" src={logoA} />
                </Row>
            </Container>

            <Container className="d-none d-md-block">
                <Row>
                    <Col md={4}><NavigationDesktop /></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3}><img className="cover" src={D2} /></Col>
                    <Col className="col-flex" md={8}><h1>Keeping you all <span className="maintain-h1">upto date</span> ...</h1>
                        <article>
                            <p>But i must explain how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system, and expound the adua teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids plasure itself, because it is pleasure, but because those who do not know hot to pursue pleasure rationally encounter qounsequences that are.</p>
                            <p>But i must explain to you how all this mistaken idea of denouncing pleasure anc praising pain was born and i will give you a complete account of the system, and expound te actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                        </article>
                        <div className="what-we-do">
                            <p>Maintainable</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default Maintainable;