import {
  Heading,
  Text,
  Flex,
  Box,
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import { Colors } from '../common/COLORS';


export default function Home() {
  const { isRefreshingUser, user } = useAuth();
  const userName = user.name ?? 'stranger';

  return (
    <div>
      <SkeletonText isLoaded={!isRefreshingUser}>
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
      </SkeletonText>
    </div>
  );
}
