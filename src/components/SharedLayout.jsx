import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Navigation } from './NavigationMain';
import { NavigationAuth } from './NavigationAuth';
import { Loading } from './Loading';
import { UserMenu } from './UserMenu';
import { Box, Flex, VStack, } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';


export const SharedLayout = () => {
  const isLoggedIn = useAuth().isLoggedIn;

  return (
    <VStack ml="auto" mr="auto" minWidth="max-content">
      <Box
        minWidth="max-content"
        as="header"
        p="12px"
        w="80%"
        bg={Colors.bgYellow}
        px="32px"
        color={Colors.blue}
        boxShadow=" 0px 2px 4px -1px rgba(0, 0, 0, 0.2)"
      >
        <Flex
          as="nav"
          justify="space-between"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Navigation showPrivate={isLoggedIn} />
          {isLoggedIn ? <UserMenu /> : <NavigationAuth />}
        </Flex>
      </Box>
      <Suspense fallback={<Loading isLoading loadingText="Loading..." />}>
        <Outlet />
      </Suspense>
    </VStack>
  );
};



/* FIXME: move to AuthNav component
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}

FIXME: >

<HStack spacing="16px">
              <StyledLink to="/register">
                <Text fontSize="20px">Register</Text>
              </StyledLink>
              <StyledLink to="logIn">
                <LoginIcon />
              </StyledLink>
            </HStack>
*/


/*
const Button = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid ${Colors.blue};
  background-color: ${Colors.bgYellow};
  color: ${Colors.blue};

  &:hover,
  &:focus {
    outline: solid 2px ${Colors.blue};
    background-color: ${Colors.yellow};
  }
`; */



/*
          { {!isLoggedIn && (
            <StyledLink to="/">
              <Text fontSize="20px">Home</Text>
            </StyledLink>
          )}
          {isLoggedIn && (
            <StyledLink to="/contacts" end>
              <Text fontSize="20px" alignSelf="flex-end">
                Contacts
              </Text>
            </StyledLink>
          )} */
