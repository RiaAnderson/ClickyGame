  
import React from "react";

function Score (props) { 
    return (
        <div>
            <h3>
                <strong className= "instruction"><h1>Schitt's Creek Memory Game</h1></strong>
      <p>Click all the cast members to score points, but don't click on a cast member more than once.</p>
                <p className = "score"><strong>Score: {props.score} | TopScore: {props.topscore}</strong></p>
                <p className = "message"><strong>{props.message}</strong></p>
            </h3>
        </div>
    );
}

export default Score;