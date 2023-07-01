import {
  VStack,
  Text,
} from '@chakra-ui/react';
import useAuth  from 'hooks/useAuth';
import useContacts from 'hooks/useContacts';

export const ErrorPage = () => {
  const errAuth = useAuth().errorMsg;
  const errContacts = useContacts().errorMsg;

  return (
    <VStack>
      {errAuth && (
        <Text as="h2" fontSize="24px">
          {errAuth}
        </Text>
      )}
      {errContacts && (
        <Text as="h2" fontSize="24px">
          {errAuth}
        </Text>
      )}
      {!(errAuth || errContacts) (<Text>No errors :)</Text>)}
    </VStack>
  );
}
