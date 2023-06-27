import { useSelector, useDispatch } from 'react-redux';
import {
  selectContactList,
  selectShownContacts,
  selectContactsIsLoading,
} from 'redux/contacts/selectors';
import {
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

export const useContacts = () => {
  const visibleContacts = useSelector(selectShownContacts);
  const contacts = useSelector(selectContactList);
  const isLoading = useSelector(selectContactsIsLoading);
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    console.log('onaddContact(newContact))>>', newContact);
    dispatch(addContact(newContact));
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  return {isLoading, visibleContacts,contacts, onAddContact, onDeleteContact};
};
