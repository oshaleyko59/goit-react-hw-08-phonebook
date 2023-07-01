import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = ({ target }) => {
    dispatch(setFilter(target.value.toLowerCase()));
  };

  return {filter, onChangeFilter};
};
