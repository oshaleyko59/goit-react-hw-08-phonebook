import {
  Heading,
  Text,
  Flex,
  Box,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { setFirstView } from 'redux/firstViewSlice';
import { useFirstView } from 'hooks/useFirstView';
import useContacts from 'hooks/useContacts';
import { Error } from 'components/Error';
import { Colors } from '../common/COLORS';


export default function Home() {
  const dispatch = useDispatch();
  const firstView = useFirstView().firstView;
  const { isEmpty, isContactsFetched } = useContacts();
  const shoulNavigate = firstView && !isEmpty;

  console.log(
    'firstView & isEmpty : navigate?',
    firstView,
    isEmpty,
    `${shoulNavigate ? 'navigate' : 'stay'}`
  );
  useEffect(() => {
    if (firstView === true) {
      dispatch(setFirstView(false));
    }
  }, [dispatch, firstView]);

  const { isRefreshingUser, user } = useAuth();
  const userName = user.name ?? 'stranger';

  return (
    <div>
      <Error/>
      <SkeletonText isLoaded={!isRefreshingUser && isContactsFetched}>
        {shoulNavigate ? (
          <Navigate to="/contacts" />
        ) : (
          <Flex
            direction="column"
            spacing="20px"
            px="32px"
            py="16px"
            w={[400, 500, 700]}
          >
            <SkeletonText isLoaded={!isRefreshingUser}>
              <Heading py="24px" fontWeight="500" color={Colors.blue}>
                Hello, {userName}!
              </Heading>
              <Box w={[300, 400, 500]}>
                <Text fontSize="24px" color={Colors.blue}>
                  Here you can store your contacts and retrieve them whenever
                  you need to.
                </Text>
              </Box>
              <Text my="16px" fontSize="20px" color={Colors.blue}>
                Please {user ? 'go to Contacts page' : 'login or register'} to
                enjoy the service.
              </Text>
            </SkeletonText>
            <Skeleton isLoaded={!isRefreshingUser}>
              <iframe
                src="https://giphy.com/embed/3orif6dTdmZd3fC4V2"
                width="480"
                height="362"
                frameBorder="0"
                title="via GIPHY"
              />
            </Skeleton>
          </Flex>
        )}
      </SkeletonText>
    </div>
  );
}
