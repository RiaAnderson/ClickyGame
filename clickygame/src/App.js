import React, {Component} from 'react';

class App extends Component {
  state={
    actors:[1,2,3]
  }
  
  render() {

  return (
    <div className="App">
      <h1>Schitt's Creek Memory Game</h1>
      <p>Click all the cast members to score points, but don't click on a cast member more than once.</p>
      {this.state.actors.map(actor => <img src="https://via.placeholder.com/250" alt="placeholder" />)}
      
    </div>
  );
  }
}

export default App;
