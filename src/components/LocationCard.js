import React from "react";

export default function LocationCard (props) {

  const {name, type, dimension, residents} = props.data;

  return (

      <div className="location-card">

        <h2>{name}</h2>

        <div className="location-type">
          Type: <em>{type}</em>
        </div>

        <div className="location-dimension">
          Dimension: <strong>{dimension}</strong>
        </div>

        <div className="location-residents">
          Residents: <em>{residents.length}</em>
        </div>



        </div>
  
  );
}

