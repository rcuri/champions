import React from 'react';
import video from '../images/KobeBryant.mp4';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../images/logo_transparent2.png';
const videoSize = {
  height:"100vh",
  
}
const background = {
  backgroundColor:"black",
 
  paddingTop:"50px"
}
const buttonStyle = {
  border:"2px white solid",
  backgroundColor:"rgb(92,92,92, .4)"
}
const style = {
  height:"100vh",
}
const logo = {
   width:"20rem",
  
   
}

function TitleVid()
{
    return(
        <div className = "TitleVid" style = {background} >



    <header>
  <div class="overlay"></div>
  <video playsinline webkit-playsinline autoplay loop muted className = "fadeOut animate playsinline autoplay" playsinline="playsinline" autoplay="autoplay" muted="true">
    <source src={video} type="video/mp4"/>
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">

     
      <Container>

        <Row>
          <Col xs = "12" sm = "12" md = "12" lg = "12" xlg = "12">
            <Link to = "/home" component = {'./Main'}>    
            <img className = "animated fadeIn img-fluid img-responsive"  src = {Logo} style = {logo} alt = "logo"/>         
            </Link>
          </Col>
        </Row>


        <Row className = "top-buffer">
          <Col xs = "12" sm = "12" md = "12" lg = "12" xlg = "12" >
          <Link to = "/home" component = {'./Main'}>
             <Button style = {buttonStyle} variant = "secondary">Proceed to Site</Button>
          </Link>
          </Col>
        </Row>

      </Container>
     
      
      </div>
    </div>
  </div>
</header>


<div className = "footer fadeIn animate" style = {background} >






</div>
        </div>
    )
}
export default TitleVid