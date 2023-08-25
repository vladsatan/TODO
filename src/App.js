import './App.css';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import Todo from './Components/Todo/Todo';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Typography, Container } from '@mui/material';
import theme from './styles/stylesConfig';

function App() {

  const todos = useSelector((state) => state.todoList.todos);

  return (
    <Container maxWidth="1200px" sx={theme.containerStyles}>
        <Typography variant="h3" component="h1" sx={theme.h1}>React todo app</Typography>
        <CreateTodo />
        {todos.length > 0 ? 
        todos.map( todo => <Todo item={todo} key={todo.id} />) 
        : <Typography sx={theme.empty}>no todos</Typography>}
    </Container>
  );
}

export default App;
