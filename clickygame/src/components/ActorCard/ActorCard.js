import React from "react";
import "./ActorCard.css";

function ActorCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" src={props.image} onClick={() => props.clickPicture(props.id)}/>
      </div>
    </div>
  );
}

export default ActorCard;
