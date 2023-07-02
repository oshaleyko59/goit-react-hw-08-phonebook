//import { setErrorMessage } from 'redux/errorSlice';
import { selectErrorMessage } from 'redux/error-selectors';
import { useSelector } from 'react-redux';

export const useError= () => {
  const errMessage = useSelector(selectErrorMessage);

  return { errMessage };
};
