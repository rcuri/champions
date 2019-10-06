import React from 'react';
import {Card, Container, Row, Col, Table} from 'react-bootstrap';



const top = {
    paddingTop:"100px"
}


function Stats(props)
{
    return(
        
        <div style = {top} className = "Stats">
       
  
            <div data-spy = "scroll" className = "scrollspy">

            <Container>
                <Row>
                <Col>

                    <Card>

                        <Card.Body>
                            <h1>salvador</h1>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <Row>
                    <Col>

                    <Card>

                        <Card.Body>
                            <Table responsive striped bordered>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First</th>
                                        <th>Middle</th> 
                                        <th>Last</th>
                                        <th>Pin</th>
                                        <th>3-Pointers</th>
                                        <th>Points</th>
                                        <th>TripleD</th> 
                                        <th>PPG</th>
                                        <th>Win</th>
                                        <th>Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/*regular html w/o props */}
                                         <th scope = "row">1</th>
                                       <th>Salvador</th>
                                       <th></th>
                                       <th>Salgado</th>
                                       <th>2311</th>
                                       <th>455</th>
                                       <th>10292</th>
                                       <th>22</th>
                                       <th>45.4</th>
                                       <th>3</th>
                                       <th>9</th>

                                       
                                    </tr>
                                       
                                

                                    
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                   


                    </Col>
                 
                </Row>
            </Container>
            
            </div>
        </div>
    )
}

export default Stats