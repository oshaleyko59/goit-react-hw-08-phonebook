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


