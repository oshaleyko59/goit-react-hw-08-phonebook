import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import Proptypes from 'prop-types';

import { Colors } from '../common/COLORS';


const getStyle = ({ isActive, isPending }) => {
  return {
    color: isPending ? 'red' : isActive ? 'gray' : `${Colors.blue}`,
  };
};

export const Navigation = ({ showPrivate }) => {

  return (
    <Flex gap="10" alignItems="center">
        <NavLink to="/" style={getStyle}>
          <Text fontSize="20px">Home</Text>
        </NavLink>
      {showPrivate && (
        <NavLink to="/contacts" style={getStyle} end>
          <Text fontSize="20px" alignSelf="flex-end">
            Contacts
          </Text>
        </NavLink>
      )}
    </Flex>
  );
};

Navigation.propTypes = {
  showPrivate: Proptypes.bool,
};
