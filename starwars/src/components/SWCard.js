import React from "react";

const SWCard = props => {
  return (
    <div className="SW-List">
      <h1>Character's Birth Year: {props.birth_year}</h1>
      <h2>Character's Gender: {props.gender}</h2>
      <h3>Character's Eye Color: {props.eye_color}</h3>
      <h4>Character's Height: {props.height}</h4>
      <h5>Character's Mass: {props.mass}</h5>
      <h6>Character's Creation Date: {props.created}</h6>
    </div>
  );
};

export default SWCard;
