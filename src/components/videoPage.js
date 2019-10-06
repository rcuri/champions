import React from 'react';
import { Card, Container, Col, Row} from 'react-bootstrap';
import NavbarPage from './NavbarPage';
import video from '../images/KobeBryant.mp4';
import Data from './Data';

const videoSize = {
    height:"20vh"
}

const paddingT = {
    paddingTop:"100px"
}

function videoPage()
{
    return(
        <div className = " videoPage Main CompareOne" style = {paddingT}>
            <NavbarPage/>

                <Container>
                    <Row>
                        <Col>
                            <Card >
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                            <div class="overlay"></div>
                                            <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src={video} type="video/mp4"/>
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Video Header</h1>
        <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
      </div>
    </div>
  </div>
</header>
                                            </Col>             
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
          


        
    )
}

export default videoPage