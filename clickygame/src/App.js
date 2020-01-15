import React, {Component} from 'react';

class App extends Component {
  state={
    actors:[
      {
        images: require ("./images/Alexis.jpg")
      }
    ]
  }
  
  render() {

  return (
    <div className="App">
      <h1>Schitt's Creek Memory Game</h1>
      <p>Click all the cast members to score points, but don't click on a cast member more than once.</p>
      {this.state.actors.map(actor => <img src={actor.images} alt="placeholder" />)}
      
    </div>
  );
  }
}

export default App;
