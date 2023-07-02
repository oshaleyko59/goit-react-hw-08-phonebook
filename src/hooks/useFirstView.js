//import { setFirstView } from 'redux/firstViewSlice';
import { selectFirstView } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

export const useFirstView = () => {
  const firstView = useSelector(selectFirstView);

  return { firstView };
};
