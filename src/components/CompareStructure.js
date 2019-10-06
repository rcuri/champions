import React from 'react';
import { Table, Card, Col, Row, Container} from "react-bootstrap";

const shadow = {
    boxShadow:"5px 5px 5px black"
}


function CompareStructure(props)
{
    return(
        <div className = "CompareStructure">

          
                     
                       <div className = "statContainer">
                    {/* 
                      <h5>Name:&nbsp;{props.Name}</h5>
                      <h5>First NBA Season:&nbsp; {props.Season}</h5>
                      <h5>Position:&nbsp;{props.Position}</h5>
                      <h5>Asists:&nbsp;{props.Assists}</h5>
                      <h5>Blocks:&nbsp;{props.Blocks}</h5>
                
                      <h5>Field Goal Attempted:&nbsp;{props.fieldGoalAtt}</h5>
                      <h5>Field Goal Made:&nbsp;{props.fieldGoalMade}</h5>
                      <h5>Field Goal Percentage:&nbsp;{props.fieldGoalPercent}</h5>
                      <h5>Free Throw Attempts:&nbsp;{props.freeThrowAttempt}</h5>
                      <h5>Free Throw Made:&nbsp;{props.freeThrowMade}</h5>

                      <h5>Free Throw Percentage:&nbsp;{props.freeThrowPct}</h5>
                      <h5>Points Per Game:&nbsp;{props.PPG}</h5>
                      <h5>Three Pointers Attempted:&nbsp;{props.ThreePointersAttempted}</h5>
                      <h5>Three Pointers Made:&nbsp;{props.ThreePointersMade}</h5>
                      <h5>Three Pointers Percentage:&nbsp;{props.ThreePointersPct}</h5>
                      
                      <h5>True STG Percentage:&nbsp; {props.trueSTGPct}</h5>
                      <h5>Defensive Rebounds:&nbsp;{props.defReb}</h5>
                      <h5>Offensive Rebounds:&nbsp;{props.offReb}</h5>
                      <h5>Total Rebounds:&nbsp;{props.totReb}</h5>
                      <h5>Turnovers:&nbsp;{props.turnOvers}</h5>
                      
                      <h5>Steals:&nbsp;{props.steals}</h5>
*/}


                   
                    <br/>
                      <Table responsive striped bordered hover>
                               
                                <tbody>
                                    <th colspan = "2">
                                       
                                        
                                        <Card className = "bg-secondary">
                                            <Card.Body>
                                                <img className = "rounded-circle" src = {props.PlayerImage} alt = "player Image"/>
                                            </Card.Body>
                                        </Card>




                                    </th>
                                    <tr>
                                    
                                         <th scope = "row">Name</th>
                                         
                                       <th> <h5>{props.Name}</h5></th>


                                      </tr>

                                      <tr>
                                       <th scope = "row">First NBA Season</th>
                                       <th><h5>{props.Season}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Position</th>
                                       <th><h5>{props.Position}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Assists</th>
                                       <th><h5>{props.Assists}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Blocks:</th>
                                       <th><h5>{props.Blocks}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Field Goal Attempted:</th>
                                       <th><h5>{props.fieldGoalAtt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Field Goal Made:</th>
                                       <th><h5>{props.fieldGoalMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Field Goal Percentage:</th>
                                       <th><h5>{props.fieldGoalPercent.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Free Throw Attempted</th>
                                       <th><h5>{props.freeThrowAttempt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Free Throws Made</th>
                                       <th><h5>{props.freeThrowMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Free Throw Percentage</th>
                                       <th><h5>{props.freeThrowPct.toFixed(2)}%</h5></th>
                                       </tr> 
                                       <tr>
                                       <th scope = "row">Points Per Game</th>
                                       <th><h5>{props.PPG}</h5></th>
                                       </tr> 
                                       <tr>
                                       <th scope = "row">Three Pointers Attempted</th>
                                       <th><h5>{props.ThreePointersAttempted}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Three Pointers Made</th>
                                       <th><h5>{props.ThreePointersMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Three Pointers Percentage</th>
                                       <th><h5>{props.ThreePointersPct.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">True STG Percentage</th>
                                       <th><h5>{props.trueSTGPct.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Defensive Rebounds:</th>
                                       <th><h5>{props.defReb}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Offensive Rebounds:</th>
                                       <th><h5>{props.offReb}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Total Rebounds:</th>
                                       <th><h5>{props.totReb}</h5></th>
                                       </tr>
                                       <tr>
                                       <th scope = "row">Turn Overs</th>
                                       <th><h5>{props.turnOvers}</h5></th>
                                       </tr>
                                </tbody>
                            </Table>
                    

                   


                

                       </div>
          


        </div>
    )
}

export default CompareStructure