import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Filter;
