import { useSelector, useDispatch } from 'react-redux';
import {
  selectContactList,
  selectShownContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectFilter,
} from 'redux/contacts/contacts-selectors';
import {
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';

export const useContacts = () => {
  const visibleContacts = useSelector(selectShownContacts);
  const contacts = useSelector(selectContactList);
  const isLoading = useSelector(selectContactsIsLoading);
  const filter = useSelector(selectFilter);
  const errorMsg = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
   // console.log('onaddContact(newContact))>>', newContact);
    dispatch(addContact(newContact));
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  return {filter, errorMsg, isLoading, visibleContacts,contacts, onAddContact, onDeleteContact};
};
export default useContacts;
