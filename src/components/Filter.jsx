// ************************************************************
// * Поле пошуку для фільтрації списку контактів за ім'ям:
// *  - інпут без форми, значення якого записується у стан (контрольований елемент)
// *  - Логіка фільтрації повинна бути нечутливою до регістру

import PropTypes from 'prop-types';
import { Text, Input } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';

export const Filter = ({ value, onChangeFilter}) => {
  return (
    <Text as="label" mb='20px' fontWeight="500" color={Colors.blue}>
      {'Search by name: '}
      <Input
        width="auto"
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        color='red'
        background={Colors.bgYellow}
      />
    </Text>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}
