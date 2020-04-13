import React, { useReducer} from 'react'
import {reducer, initialState} from './reducers/reducer'
import TodoForm from './components/TodoForm'
import './App.css';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
