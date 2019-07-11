import React, { Component } from 'react';
import './App.css';
import Count from './pages/Count/index'
import ToDoList from './pages/Todo/index'
class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>计数器</h2>
          <Count />
          <h2>todolist</h2>
          <ToDoList />
      </div>
    );
  }
}

export default App;
