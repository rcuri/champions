import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Logo from '../images/logo_transparent2.png';

import {Link } from 'react-router-dom';
import Data from './Data';
import Main from './Main';

const style = {
    height:"100vh",
}
 const logo = {
     width:"20rem",
     border:"2px red solid"
     
 }



function Title()
{
    return(

        <div className = "Title" style = {style}>
           <div className = "overlay"style = {style}>
               
   
           <Container className = "d-flex justify-content-center align-items-center" style = {style}>
                <Row>
                    <Col xs = "12" s = "12" md = "12" lg = "12" xlg = "12">
                       
                            <Link to = "/home" component = {'./Main'}>    
                            <img className = "animated fadeIn img-fluid img-responsive"  src = {Logo} style = {logo} alt = "logo"/>
                        
                            </Link>
                         
                        
                    </Col>                  
                </Row>
            </Container>

           
           </div>
        </div>
    )
}

export default Title;