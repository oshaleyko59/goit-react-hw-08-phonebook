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
  color: blue;

  &.active {
    color: white;
  }
`;

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <VStack ml="auto" mr="auto">
      <Box
        as="header"
        p="16px"
        w="80%"
        bg={Colors.bgYellow}
        px="32px"
        color={Colors.blue}
        boxShadow=" 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        x 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      >
        <Flex as="nav" justify="space-between">
          {!isLoggedIn && (
            <StyledLink to="/">
              <Text fontSize="20px">Home</Text>
            </StyledLink>
          )}
          {isLoggedIn && (
            <StyledLink to="/contacts" end>
              <Text fontSize="20px">Contacts</Text>
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

/* BKP:
  <Flex as="nav" justify="space-between">
          <StyledLink to="/" >
            <Text fontSize="24px">Home</Text>
          </StyledLink>
          {isLoggedIn && <StyledLink to="/contacts" end>
            <Text>Contacts</Text>
          </StyledLink>}
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

/*             <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>; */
