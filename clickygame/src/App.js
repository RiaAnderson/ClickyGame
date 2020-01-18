import React, {Component} from 'react';
import './styles.css';


class App extends Component {
  state={
    clickedActors: [],
    Score: [],
    roundEnd: false,
    actors:[
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
  }

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
