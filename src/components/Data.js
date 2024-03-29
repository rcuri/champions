import React, { Component } from 'react';
import {Container, Row, Col, Button, FormControl, Form} from 'react-bootstrap';
import axios from 'axios';
import APIClient from './APIClient2';
import CompareStructure from './CompareStructure';
import bryant from '../images/bryant.jpg';
//import user from '../../public/player_images/user.png';


const shadow = {boxShadow:"3px 3px 3px black"}

const search = {width:"10rem"}

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
let data = this.state;
this.setState({[event.target.player_name]: event.target.value});
this.setState({player_name: event.target.value});
this.getInfo(data);

}


getInfo = (data) => {

  this.APIClient  = new APIClient();
  this.APIClient.getPlayer(this.state).then((data) => {

    if(data.player_image === null){
      data.player_image = "user.png";
    }

    this.setState({data, players:data});

   
  })

}

 componentDidMount(state){

  this.setState({player:state});
  this.APIClient  = new APIClient();
  this.APIClient.getPlayer(this.state.player).then((data) => {
    console.log(data);
    this.setState({state, players:data})
  }
  ) ;
  
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
               
                  <FormControl style = {search} name = 'player_name' type = "text" placeholder="Search Player" className = "col-mr-sm-10 col-xs-6" ref = "player_name" value={this.state.player_name || ''} onChange = {event => this.setState({player_name: event.target.value})}/>
                  </Col>
                  <Col>
                  <Button style = {shadow} type = "submit" value = "Submit" variant = "primary">Search</Button>
                  </Col>
              </Row>
          </Container>
      </Form>

     


      <CompareStructure
      Name = {this.state.players.player_name}
      Season = {this.state.players.first_nba_season}
      Position = {this.state.players.position}
      Assists = {this.state.players.assists}
      Blocks = {this.state.players.blocks}
    /*Begin Nested */
      fieldGoalAtt = {this.state.players.field_goal_attempted}
      fieldGoalMade = {this.state.players.field_goal_made}
      fieldGoalPercent = {this.state.players.field_goal_pct*100}
      freeThrowAttempt = {this.state.players.free_throw_attempted}
      freeThrowMade = {this.state.players.free_throw_made}

      freeThrowPct = {this.state.players.free_throw_pct*100}
      PPG = {this.state.players.points}
      ThreePointersAttempted = {this.state.players.three_pt_attempted}
      ThreePointersMade = {this.state.players.three_pt_made}
      ThreePointersPct = {this.state.players.three_pt_pct*100}
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