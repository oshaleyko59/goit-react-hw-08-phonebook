// ************************************************************
// * Поле пошуку для фільтрації списку контактів за ім'ям:
// *  - інпут без форми, значення якого записується у стан (контрольований елемент)
// *  - Логіка фільтрації повинна бути нечутливою до регістру

/*  TODO: */
import { Text, Input } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';

export const Filter = ({ value, onChangeFilter}) => {
/*   const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = ({ target: { value } }) => {
    dispatch(setFilter(value.toLowerCase()));
  }; */

  return (
    <Text as="label" fontWeight="500" color={Colors.blue}>
      {'Search by name: '}
      <Input
        width="auto"
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </Text>
  );
};

