import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Counter from './Counter';
import Posts from './Posts';
import Reducer from './Reducer';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Counter />
        <Form />
        <Reducer />
        <Posts />
      </div>
    );
  }
}

export default App;
