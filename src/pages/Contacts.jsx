import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFilter } from '../hooks/useFilter';
import { useContacts } from '../hooks/useContacts';
import { setFirstView } from 'redux/firstViewSlice';
import { useFirstView } from 'hooks/useFirstView';
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
  const firstView = useFirstView().firstView;
  const { filter, onChangeFilter } = useFilter();
  const { isBusy, visibleContacts, isEmpty,  onDeleteContact } =
    useContacts();

  useEffect(() => {
    if (firstView === true) {
      dispatch(setFirstView(false));
    }
  }, [dispatch, firstView]);

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
      <Error />
      {isBusy ? (
        <Loading isLoading loadingText="" />
      ) : (
        !isEmpty && <Filter value={filter} onChangeFilter={onChangeFilter} />
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

/* FIXME: wrapp all into Container
const barStyles = {// for Stack
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};
 */
