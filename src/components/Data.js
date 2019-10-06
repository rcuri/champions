import React, { Component } from 'react';
import {Container, Row, Col, Button, FormControl, Form} from 'react-bootstrap';
import axios from 'axios';
import APIClient from './APIClient';
import CompareStructure from './CompareStructure';
import bryant from '../images/bryant.jpg';



const shadow = {
  boxShadow:"5px 5px 5px black"
}

class Data extends Component {
  constructor(props) {
   super(props);


   this.state = {
     player:{
         player_name: 'Kobe Bryant',
       
     },
     players:null,
   
     
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   
  event.preventDefault();
}

handleSubmit = (event) => {

event.preventDefault();
const data = this.state;
console.log(data);
console.log(event);
console.log(event.target.player_name);
console.log(event.target.value);
this.setState({[event.target.player_name]: event.target.value});
this.setState({player_name: event.target.value});
this.getInfo(data);

}

getInfo = (data) => {
  this.setState({data, player: data});
  this.APIClient  = new APIClient();
  this.APIClient.getPlayer(this.state).then((data) =>
  this.setState({data, players:data})) ;
}

 componentDidMount(state){

  this.setState({player:state});
  this.APIClient  = new APIClient();
  this.APIClient.getPlayer(this.state.player).then((data) =>
  this.setState({state, players:data})) ;
 };

 render() {
   if(this.state.players == null)
   {
     return null;
   }

   return(
     <div>
       
    
      <p className = "lead">Search for your player!</p>
      <hr/>

      <Form onSubmit = {this.handleSubmit}>
          <Container>
              <Row>
              <Col xs = "8" sm = "6" md = "6" lg = "6" xlg = "6">
               

                  <FormControl name = 'player_name' type = "text" placeholder="Search Player" className = "col-mr-sm-10 col-xs-6" ref = "player_name" value={this.state.player_name || ''} onChange = {event => this.setState({player_name: event.target.value})}/>
                  </Col>
                  <Col>
                  <Button  type = "submit" value = "Submit" variant = "primary">Submit</Button>
                  </Col>
              </Row>
          </Container>
      </Form>

      <CompareStructure
PlayerImage = {bryant}
      Name = {this.state.players.player_name}
      Season = {this.state.players.first_nba_season}
      Position = {this.state.players.positions}
      Assists = {this.state.players.assists}
      Blocks = {this.state.players.blocks}
    /*Begin Nested */
      fieldGoalAtt = {this.state.players.shooting.field_goal_attempted}
      fieldGoalMade = {this.state.players.shooting.field_goal_made}
      fieldGoalPercent = {this.state.players.shooting.field_goal_pct*100}
      freeThrowAttempt = {this.state.players.shooting.free_throw_attempted}
      freeThrowMade = {this.state.players.shooting.free_throw_made}

      freeThrowPct = {this.state.players.shooting.free_throw_pct*100}
      PPG = {this.state.players.shooting.points}
      ThreePointersAttempted = {this.state.players.shooting.three_pt_attempted}
      ThreePointersMade = {this.state.players.shooting.three_pt_made}
      ThreePointersPct = {this.state.players.shooting.three_pt_pct*100}
      trueSTGPct = {this.state.players.shooting.true_stg_pct*100}
      /*End Nested*/
      defReb = {this.state.players.def_reb}
      offReb = {this.state.players.off_reb}
      totReb = {this.state.players.tot_reb}
      turnOvers = {this.state.players.turnovers}
      steals = {this.state.players.steals}/>

     </div>
   );
 }

 

 
 
}

export default Data