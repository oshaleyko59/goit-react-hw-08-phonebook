import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Loading } from './Loading';
import { UserMenu } from './UserMenu';
import { LoginIcon } from 'icons/LoginIcon';
import { Box, Flex,Text, VStack, HStack } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: ${Colors.blue};

  &.active {
    color: #7f8137;
  }
`;

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
          {!isLoggedIn && (
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
          )}
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <HStack spacing="16px">
              <StyledLink to="/register">
                <Text fontSize="20px">Register</Text>
              </StyledLink>
              <StyledLink to="logIn">
                <LoginIcon />
              </StyledLink>
            </HStack>
          )}
        </Flex>
      </Box>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </VStack>
  );
};
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
