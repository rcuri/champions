
import Data from './Data';
import {Col, Container, Row,Form, FormControl, Button} from 'react-bootstrap';
import React, { Component } from 'react';


import APIClient from './APIClient';
import CompareStructure from './CompareStructure';




/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Component Not In Use, for back up only 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */










class SearchBar2 extends Component
{
    constructor(props) {
        super(props);

        this.state = {
          player:'Pau Gasol',
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        event.preventDefault();
      
        this.setState({player:event.target.value});
 

      }

      handleSubmit(event) {
   
        event.preventDefault();
       
   
        alert('A name was submitted: ' + this.state.player);
        console.log(this.state.player);
        let newPlayer = event.target.value;
        this.setState({player: newPlayer});
        console.log(this.state.player);
        console.log(this.state.player + " this is your new state")

      }

   render()
   {
       return(
       <div className = "SearchBar">
            <p className = "lead">Search for your player!</p>

                        <Form onSubmit = {this.handleSubmit.bind(this)}>
                            <Container>
                                <Row>
                                    <Col>
                                    <FormControl type = "text" placeholder="Search" className = "mr-sm-2" value={this.state.player || ''} onChange = {this.handleChange.bind(this)}/>
                                    </Col>
                                    <Col>
                                    <Button  type = "submit" value = "Submit" variant = "primary">Submit</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>

            <h1>{this.state.player}salvador</h1>

            <Data
            player = {this.state.player}
            />

        </div>
   )
   }
}
export default SearchBar2