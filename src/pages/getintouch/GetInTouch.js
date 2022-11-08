
import React from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import { useState } from "react";

import Navigation from "../../components/ui/Navigation";
import NavigationDesktop from "../../components/ui/NavigationDesktop"

import M3 from "../../assets/images/m3.png"
import D1 from "../../assets/images/d1.png"
import logoB from "../../assets/images/logo-b.png"

import C1 from "../../assets/images/whatwedo-small.png"
import C2 from "../../assets/images/maintainable-small.png"
import C3 from "../../assets/images/getintouch-small.png"
import ModalForm from "../../components/ui/ModalForm";


const GetInTouch = () => {

   const [openModal, setOpenModal] = useState(false)

   return (

      <div className="getintouch-bg">
         <Container className="d-md-none">
            <Row>
               <Navigation />
            </Row>
            <Row>
               <img className="cover" src={M3} alt="" />
            </Row>
            <Row>
               <h1>There for you and <span className="getintouch-h1">care for you</span> ...</h1>
            </Row>
            <Row>
               <article>
                  <p>But i must explain how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system, and expound the adua teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids plasure itself, because it is pleasure, but because those who do not know hot to pursue pleasure rationally encounter qounsequences that are.</p>
                  <p>But i must explain to you how all this mistaken idea of denouncing pleasure anc praising pain was born and i will give you a complete account of the system, and expound te actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
               </article>
            </Row>
            <Row>
               <div className="contact-container">
                  <div className="contact-card">
                     <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C1} />
                     <p>it@coolish.com</p>
                  </div>
                  <div className="contact-card">
                     <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C2} />
                     <p>pr@coolish.com</p>
                  </div>
                  <div className="contact-card">
                     <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C3} />
                     <p>it@coolish.com</p>
                  </div>
               </div>
               {openModal && <ModalForm closeModal={setOpenModal}/>}
            </Row>
            <Row className="logo-row">
               <img className="logo-a" src={logoB} />
            </Row>
         </Container>

         <Container className="d-none d-md-block">
            <Row>
               <Col md={4}><NavigationDesktop /></Col>
            </Row>
            <Row>
               <Col md={1}></Col>
               <Col md={3}><img className="cover" src={D1} /></Col>
               <Col className="col-flex" md={8}><h1>There for you and <span className="getintouch-h1">care for you</span> ...</h1>
                  <article>
                     <p>But i must explain how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete account of the system, and expound the adua teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids plasure itself, because it is pleasure, but because those who do not know hot to pursue pleasure rationally encounter qounsequences that are.</p>
                     <p>But i must explain to you how all this mistaken idea of denouncing pleasure anc praising pain was born and i will give you a complete account of the system, and expound te actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                  </article>
                  <div className="contact-container">
                     <div className="contact-card">
                        <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C1} />
                        <p>it@coolish.com</p>
                     </div>
                     <div className="contact-card">
                        <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C2} />
                        <p>pr@coolish.com</p>
                     </div>
                     <div className="contact-card">
                        <img onClick={() => {setOpenModal(true)}} className="contact-mobile-img" src={C3} />
                        <p>it@coolish.com</p>
                     </div>
                  </div>
                  {openModal && <ModalForm closeModal={setOpenModal}/>}
                  <div className="what-we-do">
                     <p>GetInTouch</p>
                  </div>
               </Col>
            </Row>
         </Container>

      </div>

   );
}

export default GetInTouch;