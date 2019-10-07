import React from 'react';
import { Table, Card} from "react-bootstrap";
import background from '../images/court3.jpg';


const SizeImage = {
    width:"12rem",
    boxShadow:"5px 5px 5px 3px black"
}
 const backgroundCardSize = {
     transform:"rotate(45)"
 }

function CompareStructure(props)
{
    return(
        <div className = "CompareStructure">
                <div>
                    <br/>
                      <Table sm responsive striped bordered hover>
                                <tbody>
                                    <th colSpan = "2" style = {backgroundCardSize}>           
                                        <Card className = "CompareCard">      
                                            <Card.Body>
                                            <Card.Img style = {backgroundCardSize} src = {background}/>
                                                <Card.ImgOverlay className = "d-flex justify-content-center align-items-center">
                                                <img style = {SizeImage}  className = "rounded-circle" src={process.env.PUBLIC_URL + '/player_images/' + props.PlayerImage} alt = "player"/>
                                                </Card.ImgOverlay> 
                                            </Card.Body>
                                        </Card>
                                    </th>
                                   
                                    <tr className = "lead">
                                        <th className = "lead" scope = "row">Name</th>
                                       <th> <h5 className = "lead">{props.Name}</h5></th>
                                      </tr>
                                        <tr>
                                       <th className = "lead"scope = "row">First NBA Season</th>
                                       <th><h5 className = "lead">{props.Season}</h5></th>
                                       </tr>
                                       <tr>

                                       <th className = "lead" scope = "row">Position</th>
                                       <th><h5 className = "lead">{props.Position}</h5></th>
                                       </tr>


                                        <tr>
                                        <th className = "table-info lead" colSpan = "2" scope = "row">Offense</th>
                                        </tr>

                                        <tr>
                                       <th className = "lead" scope = "row">Assists</th>
                                       <th><h5 className = "lead">{props.Assists}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throw Percentage</th>
                                       <th><h5 className = "lead">{props.freeThrowPct.toFixed(2)}%</h5></th>
                                       </tr> 
                                       <tr>
                                       <th  className = "lead"scope = "row">Points Per Game</th>
                                       <th><h5 className = "lead">{props.PPG}</h5></th>
                                       </tr> 
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Attempted</th>
                                       <th><h5 className = "lead">{props.ThreePointersAttempted}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Made</th>
                                       <th><h5 className = "lead">{props.ThreePointersMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Three Pointers Percentage</th>
                                       <th><h5 className = "lead">{props.ThreePointersPct.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">True STG Percentage</th>
                                       <th><h5 className = "lead">{props.trueSTGPct.toFixed(2)}%</h5></th>
                                       </tr>
                                      
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Attempted:</th>
                                       <th><h5 className = "lead">{props.fieldGoalAtt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Made:</th>
                                       <th><h5 className = "lead">{props.fieldGoalMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Field Goal Percentage:</th>
                                       <th><h5 className = "lead">{props.fieldGoalPercent.toFixed(2)}%</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throw Attempted</th>
                                       <th><h5 className = "lead">{props.freeThrowAttempt}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Free Throws Made</th>
                                       <th><h5 className = "lead">{props.freeThrowMade}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Offensive Rebounds:</th>
                                       <th><h5 className = "lead">{props.offReb}</h5></th>
                                       </tr>
                                       <tr>
                                        <th className = "table-info lead " colSpan = "2" scope = "row">Defense</th>
                                        </tr>
                                        <tr>
                                       <th className = "lead" scope = "row">Blocks:</th>
                                       <th><h5 className = "lead">{props.Blocks}</h5></th>
                                       </tr>
                                       
                                       <tr>
                                       <th className = "lead" scope = "row">Defensive Rebounds:</th>
                                       <th><h5 className = "lead">{props.defReb}</h5></th>
                                       </tr>
                                      
                                       <tr>
                                       <th className = "lead" scope = "row">Total Rebounds:</th>
                                       <th><h5 className = "lead">{props.totReb}</h5></th>
                                       </tr>
                                       <tr>
                                       <th className = "lead" scope = "row">Turn Overs</th>
                                       <th><h5 className = "lead">{props.turnOvers}</h5></th>
                                       </tr>
                                </tbody>
                            </Table>
                    
                       </div>
          


        </div>
    )
}

export default CompareStructure