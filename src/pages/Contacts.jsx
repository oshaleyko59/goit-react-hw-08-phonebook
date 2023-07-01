import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFilter } from '../hooks/useFilter';
import { useContacts } from '../hooks/useContacts';
//FIXME: import { todosOperations, todosSelectors } from '../redux/todos';
import { selectContactsError } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
//FIXME: import Container from '../components/Container';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { Stack, Text } from '@chakra-ui/react';
import { Colors } from 'common/COLORS';
import { Error } from 'components/Error';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError); //FIXME: move to hook
  const { filter, onChangeFilter } = useFilter();
  const { isLoading, visibleContacts, contacts, onDeleteContact } =
    useContacts();

  useEffect(() => {
    console.log('dispatch(fetchContacts())>>');
    dispatch(fetchContacts());
  }, [dispatch]);
  /* FIXME: wrapp all into Container
const barStyles = {// for Stack
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};
 */
  return (
    <Stack as="main" p="16px" w="80%" maxWidth="720">
      <Text as="h1" fontSize="32px" color={Colors.blue}>
        Phonebook
      </Text>
      <ContactForm />
      <Text
        as="h2"
        mt="32px"
        fontSize="24px"
        fontWeight="500"
        color={Colors.blue}
      >
        Contacts
      </Text>
      {isLoading ? (
        <Loading isLoading loadingText="" />
      ) : (
        contacts.length && (
          <Filter value={filter} onChangeFilter={onChangeFilter} />
        )
      )}
      {visibleContacts.length ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        <Error msg={'No contacts found!'} />
      )}
      {error && <Error msg={error} />}
    </Stack>
  );
}
