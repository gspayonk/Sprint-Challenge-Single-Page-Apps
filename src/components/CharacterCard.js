import React from "react";
import {Card, CardBody, CardTitle, CardText, ListGroupItem} from 'reactstrap';



export default function CharacterCard(props) {

  return (
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          {/* <CardText>Character Information:</CardText>
            {props.species}
            {props.status}
            {props.gender}
            {props.location} */}
        </CardBody>
        </Card>
  );
}
