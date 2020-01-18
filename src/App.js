import React, {Component} from 'react';
import './styles.css';
import ActorCard from "./components/ActorCard/ActorCard.js";
import Wrapper from "./components/Wrapper/Wrapper.js";


class App extends Component {
  state={
    clickedActors: [],
    score: 0,
    topScore:0,
    roundEnd: false,
    actors: [
      {
        images: require ("./images/Alexis.jpg"),
        id: 1
      },
      {
        images: require ("./images/David.jpg"),
        id: 2
      },
      {
        images: require ("./images/Jocelyn.jpg"),
        id: 3
      },
      {
        images: require ("./images/Johnny.jpg"),
        id: 4
      },
      {
        images: require ("./images/Moira.jpg"),
        id: 5
      },
      {
        images: require ("./images/Mutt.jpg"),
        id: 6
      },
      {
        images: require ("./images/Patrick.jpg"),
        id: 7
      },
      {
        images: require ("./images/Roland.jpg"),
        id: 8
      },
      {
        images: require ("./images/Ronnie.jpg"),
        id: 9
      },
      {
        images: require ("./images/Stevie.jpg"),
        id: 10
      },
      {
        images: require ("./images/Ted.jpg"),
        id: 11
      },
      {
        images: require ("./images/Twyla.jpeg"),
        id: 12
      }
    ]
  };

  onClick = (id) =>{
    let {actors} = this.state;
  
    const shuffledArray = this.shuffleArray(actors);
    this.setState({actors: shuffledArray});
    if (this.state.clickedActors.includes(id)) {
      this.setState({ score: 0, clickedActors: [], message: "Wrong! Game Over. Click an image to start again!", shuffle:"true"});
    } else {
      this.setState({
        clickedActors: this.state.clickedActors.concat([id]),
        score: this.state.score +1,
        topscore: this.state.score +1,
        message: "You Guessed Correctly!",
        shuffle: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    if(this.state.score  == 11) {
      this.setState({message: "You Won! Great Job! Click to play again!"});
      return;
    }
  }
    shuffleArray = (actorsArray) => {
      for (let i = actorsArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [actorsArray[i], actorsArray[j]] = [actorsArray[j], actorsArray[i]];
      }
      return actorsArray;
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Schitt's Creek Memory Game</h1>
        <p><strong>Click all the cast members to score points, but don't click on a cast member more than once.</strong></p>
        <p className = "score"><strong>Current Score: {this.state.score} | HighScore: {this.state.topScore}</strong></p>
            <p className = "message"><strong>{this.state.message}</strong></p>
        
        <div className="cast">
        {this.state.actors.map(actor => <img onClick= {() =>this.onClick(actor.id)} key={actor.id} src={actor.images} alt="cast member" />)}
        </div>
      
     
      <footer className = "footer">
        <div className = "container">
          <p>© Ria Anderson 2020</p>
        </div>
      </footer>
      
      
    </div>
  );
  }
}

export default App;
