import React, { useState } from "react";
import './App.css';
import Card from './components/card/card.component';

function App() {

  const [state, setState] = useState({
    monsters: []
  })

  const {monsters} = state;

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setState({ monsters: users })
      });

  return (
    <div className="App">
      <Card monsters={monsters} />
    </div>
  );
}

export default App;
