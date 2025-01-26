import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentTodo, updateTodo } from '../../redux/todoSlice';
import { selectCurrentTodo } from '../../redux/selectors';

const EditForm = () => {
  const dispatch = useDispatch();
  const handleCancelClick = () => dispatch(changeCurrentTodo(null));
  const todo = useSelector(selectCurrentTodo);
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value;
    dispatch(updateTodo(value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={handleCancelClick}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
