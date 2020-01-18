import React from "react";
import "./ActorCard.css";

function ActorCard(props) {
  return (
    <div className="card">
      <div className="container">
        <img className="image" src={this.image} onClick={() => this.clickPicture(this.id)}/>
      </div>
    </div>
  );
}

export default ActorCard;
