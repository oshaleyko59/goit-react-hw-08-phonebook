import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFilter } from '../hooks/useFilter';
import { useContacts } from '../hooks/useContacts';
import {
  selectContactsError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { Stack, Text } from '@chakra-ui/react';
import { Colors } from 'common/COLORS';
import { Error } from 'components/Error';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);
  const { filter, onChangeFilter } = useFilter();
  const { isLoading, visibleContacts, contacts, onDeleteContact } =
    useContacts();

  useEffect(() => {
    console.log('dispatch(fetchContacts())>>');
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {contacts.length && (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      )}
      {isLoading && <Loading isLoading />}
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
