import React, {Component} from 'react';
import './styles.css';
import actors from "./actors.json";
import ActorCard from "./components/ActorCard/ActorCard.js";


class App extends Component {
  state={
    clickedActors: [],
    Score: [],
    roundEnd: false,
    actors
  };

  onClick = (id) =>{
    let {clickedActors, score, actors} = this.state;
    if (clickedActors.includes(id)){
      console.log("you lost")
      clickedActors = []
      score = 0
    } else {
      score++
      clickedActors.push(id)
    }

    let actorCount = actors.length;
    let actorSelected;
    let temp;

    while (actorCount > 11) {
      actorSelected = Math.floor(Math.random() === actorCount);
      actorCount--;
      temp = actors[actorCount];
      actors[actorCount] = actors[actorSelected];
      actors[actorSelected] = temp;
    }
    
    this.setState({
      clickedActors,
      score,
      actors
    })
  }
  
  render() {
console.log(this.state)
  return (
    <div className="App">
      <h1>Schitt's Creek Memory Game</h1>
      <p>Click all the cast members to score points, but don't click on a cast member more than once.</p>
      <p className = "score"><strong>Score: {this.score} </strong></p>
      {/* <p className = "message"><strong>{props.message}</strong></p> */}
      <div className="cast">
      {this.state.actors.map(actor => <img onClick= {() =>this.onClick(actor.id)} key={actor.id} src={actor.images} alt="cast member" />)}
      </div>
      <footer className = "footer">
        <div className = "container">
          <span className="text-muted">© Ria Anderson 2020</span>
        </div>
      </footer>
      
      
    </div>
  );
  }
}

export default App;
