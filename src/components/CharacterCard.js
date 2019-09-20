import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default function CharacterCard(props) {

  const {name, status, species, gender, location} = props.data;


  return (
  
      <div className="character-card">

        <Card style={{ width: '40px', margin: '3%'}}>

          <Card.Body>
            <Card.Title>{props.name}</Card.Title>

            <Card.Text>
              Status: <em>{props.status}</em>
      

            <div className="character-species">
              Species: <strong>{props.species}</strong>
            </div>

            <div className="character-gender">
              Gender: <em>{props.gender}</em>
            </div>

        <div className="character-location">
          Location: <em>{location.name}</em>
        </div>

            </Card.Text>
        
          </Card.Body>
        </Card>      
        </div>
  );
}
