import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import { selectCurrentTodo } from './redux/selectors';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
