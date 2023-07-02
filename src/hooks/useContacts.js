import { useSelector, useDispatch } from 'react-redux';
import {
  selectContactList,
  selectShownContacts,
  selectContactsIsBusy,
  selectContactsError,
  selectFilter,
  selectIsFetched,
  selectIsEmpty,
} from 'redux/contacts/contacts-selectors';
import { addContact, deleteContact } from 'redux/contacts/contacts-operations';

export const useContacts = () => {
  const visibleContacts = useSelector(selectShownContacts);
  const allContacts = useSelector(selectContactList);
  const isEmpty = useSelector(selectIsEmpty);
  const isBusy = useSelector(selectContactsIsBusy);
  const filter = useSelector(selectFilter);
  const errorMsg = useSelector(selectContactsError);
  const isContactsFetched = useSelector(selectIsFetched);

  const dispatch = useDispatch();

  const onAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  return {
    filter,
    errorMsg,
    isBusy,
    isEmpty,
    isContactsFetched,
    visibleContacts,
    allContacts,
    onAddContact,
    onDeleteContact,
  };
};
export default useContacts;
