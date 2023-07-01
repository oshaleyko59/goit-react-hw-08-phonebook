import { NavLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import { LoginIcon } from 'icons/LoginIcon';
import { Colors } from '../common/COLORS';


const getStyle = ({ isActive, isPending }) => {
  return {
    color: isPending ? 'red' : isActive ? 'gray' : `${Colors.blue}`,
    stroke: isActive ? 'gray' : `${Colors.blue}`,
  };
};

export const NavigationAuth = () => {
  return (
    <Flex gap="16px" alignItems="center">
      <NavLink
        to="/register"
        style={getStyle}
      >
        <Text fontSize="20px">Register</Text>
      </NavLink>
      <NavLink
        to="logIn"
        style={getStyle}
      >
        <LoginIcon />
      </NavLink>
    </Flex>
  );
};
