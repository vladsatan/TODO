import './App.css';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import Todo from './Components/Todo/Todo';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {

  const todos = useSelector((state) => state.todoList.todos);
  console.log(todos);

  return (
    <div className="App">
        <h1>React todo app</h1>
        <CreateTodo />
        {todos.length > 0 ? 
        todos.map( todo => <Todo item={todo} key={todo.id} />) 
        : <p className='empty'>no todos</p>}
    </div>
  );
}

export default App;
