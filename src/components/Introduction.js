import React from "react";
import {Card, Button, Col, Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavbarPage from './NavbarPage';
import CompareTwo from "./CompareTwo";
import background from '../images/logo_transparent.png';
import CompareOne from './CompareOne';

const paddingT = {
    paddingTop:"120px",
}
const cardStyle = {
width:"25rem",
boxShadow:"5px 5px 5px black"
}
const backgroundStyle = {
    opacity:".05"
}
const shadowStyle = {
boxShadow:"3px 3px 3px black"
}

function Introduction(){
    return(
        <div className = "Main d-flex justify-content-center text-center" style = {paddingT} >
            <NavbarPage/>
            <div className = "d-flex justify-content-center text-center" >
                
            <Card style = {cardStyle} className = "d-flex justify-content-center text-center">
                   
                <Card.Body>
                <Card.Img style = {backgroundStyle} src={background} alt="Card image" />

                    
                <Card.ImgOverlay >
             
                <p className = "lead">Welcome to Champions. With this application, you have the ability to look up stats for your
                favorite player and compare both of them and see how their stats stack up with each other.
                <br/> 
                <i class="fas fa-basketball-ball fa-2x"></i>
              
                 <br/>
                
                
                Click a button below to begin!
                </p>


                 <Container>
                 <br/>
                <br/>
                     <Row>
                         <Col xs = "6" sm = "6" md = "6" lg = "6" xlg = "6">
                         <Link to = "/oneplayer" component = {'/CompareOne'}>
                            <Button style = {shadowStyle} block variant = "info"><i className="fas fa-user"></i></Button>
                            </Link>
                         </Col>

                         <Col xs = "6" sm = "6" md = "6" lg = "6" xlg = "6">
                         <Link to = "/twoplayers" component = {'./CompareTwo'}>
                  <Button style = {shadowStyle} block variant = "info"><i className="fas fa-user-friends"></i></Button>
                  </Link>

                         </Col>
                     </Row>
                 </Container>
                </Card.ImgOverlay>


                </Card.Body>
            </Card>
           
            </div>
         
        </div>
    )
}
export default Introduction