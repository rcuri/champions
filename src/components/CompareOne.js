import React from 'react';
import { Card, Container, Col, Row} from 'react-bootstrap';
import NavbarPage from './NavbarPage';

import Data from './Data';
const shadow = {
    boxShadow:"5px 5px 5px black",
    

}

const cardSize = {width:"30rem"}
const paddingT = {
    paddingTop:"105px",
   
}


function CompareOne(props)
{
    return(
        <div className = "Main CompareOne" style = {paddingT}>
            <NavbarPage/>

                <Container  style = {cardSize}>
                    <Row>
                        <Col>
                            <Card  style = {shadow} >
                                <Card.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Data/>                                 
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

export default CompareOne