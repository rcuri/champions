import React from 'react';
import Data from './Data';
import {Card, Row, Col, Container} from 'react-bootstrap';
import NavbarPage from './NavbarPage';
import Data2 from './Data2';
import background from '../images/court3.jpg';
import CompareStructure from './CompareStructure';


const shadow = {boxShadow:"5px 5px 5px black"}
const paddingT = {
    paddingTop :"100px"
}

function CompareTwo(props)
{
    return(
        <div className = "Main" style = {paddingT}>
            <NavbarPage/>
                <Container>
                    <Row>
                        <Col>
                            <Card style = {shadow} className = "lead">
                                <Card.Body>
                               
                             

                                    <Data/>
                                 
                         
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>

                            <Card style = {shadow} className = "lead">
                                <Card.Body>

                                   
                                    <Data2/>
                              
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default CompareTwo