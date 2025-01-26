import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import { selectTodos } from '../../redux/selectors';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Grid>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              counter={index + 1}
              text={todo.text}
              id={todo.id}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default TodoList;
