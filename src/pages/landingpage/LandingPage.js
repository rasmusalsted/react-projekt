import "../../css/landingpage.css"
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"

import M1 from "../../assets/images/m1.png"
import M2 from "../../assets/images/m2.png"
import M3 from "../../assets/images/m3.png"
import D1 from "../../assets/images/d1.png"
import D2 from "../../assets/images/d2.png"
import D3 from "../../assets/images/d3.png"
import logoFinal from "../../assets/images/logo-final.png"





const LandingPage = () => {

    return ( 
        
        <div className="landingpage-bg">
        <Container>
          <Row>
            <Col xs={12}><img className="logoFinal" src={logoFinal} /></Col>
            <Col xs={12} md={4}><Link to="/whatWeDo"><img className='d-md-none pb-2 cover' src={M3} /><img className='d-none d-md-block cover' src={D3} /></Link></Col>
            <Col xs={12} md={4}> <Link to="/Maintainable"><img className='d-md-none pb-3 cover' src={M2} /><img className='d-none d-md-block cover' src={D2} /></Link></Col>
            <Col xs={12} md={4}> <Link to="/getInTouch"><img className='d-md-none pb-3 cover' src={M1} /><img className='d-none d-md-block cover' src={D1} /></Link></Col>
            <Col xs={12}><div className="lpText"><p>And yet.. more to come</p></div></Col>
          </Row>
        </Container>
      </div>

     );
}
 
export default LandingPage;