import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFilter } from '../hooks/useFilter';
import { useContacts } from '../hooks/useContacts';
import {
  selectContactsError, //TODO: not in hook
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loading } from 'components/Loading';
import { Stack, Text } from '@chakra-ui/react';
import { Colors } from 'common/COLORS';
import { Error } from 'components/Error';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';//console.log('Contacts isLoading>>');

export default function Contacts() {
  const dispatch = useDispatch();

  //   const user = useSelector(selectUser);
  const error = useSelector(selectContactsError);

  const { filter, onChangeFilter } = useFilter();
  const { isLoading, visibleContacts, contacts, onDeleteContact } =
    useContacts();

  useEffect(() => {
    console.log('dispatch(fetchContacts())>>');
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log('in Contacts>>', visibleContacts.length, !contacts.length);
  return (
    <Stack as="main" p="16px" w='80%'>
      <Text as="h1" fontSize="32px" color={Colors.blue}>
        Phonebook
      </Text>
      <ContactForm />
      <Text as="h2" mt='32px' fontSize="24px" fontWeight='500' color={Colors.blue}>
        Contacts
      </Text>
      {contacts.length && (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      )}
      {isLoading ? (
        <Loading isLoading />
      ) : visibleContacts.length ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        <Error msg="No contacts found!" />
      )}
    </Stack>
  );
}

//TODO:
/*
<Filter />
      {!isLoading && !error && <ContactList />}
      {isLoading && <p>Loading contacts...</p>}
      { error && <p>{error}</p> }
*/
/* 	const [create, data] = useCreatePostMutation()
	// const { isLoading, error } = useSelector(selectProducts)
	// const sortedProducts = useSelector(selectSortedProducts)

	// const [count, setCount] = useState(0)

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getProductsThunk())
	// }, [dispatch])
	const handleClick = (id) => {
		deleteProduct(id)
		// refetch()
	} */
