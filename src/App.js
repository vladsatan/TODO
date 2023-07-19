import './App.css';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import Todo from './Components/Todo/Todo';
import data from './data';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState(data);

  return (
    <div className="App">
        <h1>React todo app</h1>
        <CreateTodo todos={todos} setTodos={setTodos} />
        {todos.length > 0 ? 
        todos.map( todo => <Todo item={todo} todos={todos} setTodos={setTodos} key={todo.text} />) 
        : <p className='empty'>no todos</p>}
    </div>
  );
}

export default App;
