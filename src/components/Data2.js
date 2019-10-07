import React, { Component } from 'react';
import {Container, Row, Col, Button, FormControl, Form} from 'react-bootstrap';
import axios from 'axios';
import APIClient2 from './APIClient2';
import CompareStructure from './CompareStructure';
import lebron from '../images/lebron.jpg';

const shadow = {boxShadow:"3px 3px 3px black"}

class Data2 extends Component {
  constructor(props) {
   super(props);
   this.state = {
     player:{
         player_name: 'Kyrie Irving',
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
console.log(event.target.player_image);

this.setState({[event.target.player_name]: event.target.value});
this.setState({player_name: event.target.value});
this.getInfo(data);
}

getInfo = (data) => {

  this.APIClient  = new APIClient2();
  this.APIClient.getPlayer(this.state).then((data) => {
    console.log(data.player_image + " before if");

    if(data.player_image === null){
      console.log("image here");
      data.player_image = "user.png";
    }
    console.log(data.player_image + "after if");

    this.setState({data, players:data});

   
  })

}







 componentDidMount(state){
 
  this.setState({player:state});
  this.APIClient2  = new APIClient2();
  this.APIClient2.getPlayer(this.state.player).then((data) =>
  this.setState({state, players:data})) ;
 };

 render() {
   if(this.state.players == null)
   {
     return null;
   }
   return(
     <div>

        <p className = "lead">Search for your second player!</p>
        <hr/>
        <Form onSubmit = {this.handleSubmit}>
            <Container>
                <Form.Row>
                    <Col xs = "8" sm = "6" md = "6" lg = "6" xlg = "6">
                    <FormControl name = 'player_name' type = "text" placeholder="Search Player" className = "col-mr-sm-10 col-xs-6" ref = "player_name" value={this.state.player_name || ''} onChange = {event => this.setState({player_name: event.target.value})}/>
                    </Col>
                    <Col >
                    <Button style = {shadow}  type = "submit" value = "Submit" variant = "primary">Search</Button>
                    </Col>
                </Form.Row>
            </Container>
        </Form>
 
      <CompareStructure

      PlayerImage = {this.state.players.player_image}
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

export default Data2;