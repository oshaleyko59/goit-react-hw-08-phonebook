import {
  VStack,
  Text, Button
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { useError } from 'hooks/useError';
/* import useAuth  from 'hooks/useAuth';
import useContacts from 'hooks/useContacts'; */

export const ErrorPage = () => {
  const { errMessage } = useError();
/*   const errAuth = useAuth().errorMsg;
  const errContacts = useContacts().errorMsg; */
  console.log('ErrorPage>>errMessage', errMessage);
  
  return (
    <VStack>
      <Text as="h2" fontSize="24px">
        ERROR:
      </Text>
      <Text>{errMessage || 'No errors'}</Text>
      <Button onClick={() => <Navigate to="/" />}>GO HOME</Button>
    </VStack>
  );
}
