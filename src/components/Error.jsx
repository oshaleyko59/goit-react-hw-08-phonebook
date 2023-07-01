import { Text, Flex } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import useContacts from '../hooks/useContacts';
//import { useSelector } from 'react-redux';
//import { selectAuthError } from 'redux/auth/authSelectors';
//import { selectContactsError } from 'redux/contacts/selectors';

export const Error = () => {
  const errorAuth = useAuth().errorMsg;
  const errorContacts = useContacts().errorMsg;
  const error = `${
    errorAuth && `${errorAuth}`
  }  ${errorContacts && `${errorContacts}`}`;

    if (!error) return null;

  return (
    <>
      <Flex alignItems="flex-start">
        <Text as="h2" fontSize="24px" color="red">
          {error}
        </Text>
      </Flex>
    </>
  );
};


//const ERR_UNKNOWN = 'Something unexpected happed...';
