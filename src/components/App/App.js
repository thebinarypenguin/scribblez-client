import React from 'react';
import NoteList from '../NoteList/NoteList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <h1 className="App">
      I'm the App! I'm the App! I'm the App!
      </h1>

      <NoteList />
      </>
    );
  }
}

export default App;
