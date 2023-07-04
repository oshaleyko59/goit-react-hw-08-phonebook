import { Stack, Text } from '@chakra-ui/react';
import { useFilter } from '../hooks/useFilter';
import { useContacts } from '../hooks/useContacts';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { NewUserWelcome } from 'components/NewUserWelcome';
import { Colors } from 'common/COLORS';

export default function Contacts() {

  const { filter, onChangeFilter } = useFilter();
  const { isBusy, visibleContacts, isEmpty,  onDeleteContact } =
    useContacts();

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
      {isBusy ? (
        <Loading isLoading loadingText="" />
      ) : (
        isEmpty ? <NewUserWelcome /> :  <Filter value={filter} onChangeFilter={onChangeFilter} />
      )}
      {visibleContacts.length && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      )}
    </Stack>
  );
}

