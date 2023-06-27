//import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //
import {
  selectContactList,
  selectShownContacts,
  selectContactsIsLoading,
} from 'redux/contacts/selectors'; //, selectFilter
//import { useFilter } from './useFilter';
//import { setFilter } from 'redux/contacts/filterSlice';
import {
  addContact,
 // fetchContacts,
  deleteContact,
} from 'redux/contacts/operations';
//import { toast } from 'react-hot-toast';



export const useContacts = () => {
  const visibleContacts = useSelector(selectShownContacts);
  const contacts = useSelector(selectContactList);
  const isLoading = useSelector(selectContactsIsLoading);
  const dispatch = useDispatch();
  //console.log('useContacts>>', visibleContacts, contacts);

  const onAddContact = (newContact) => {
    console.log('onaddContact(newContact))>>', newContact);
    dispatch(addContact(newContact));
  /*   dispatch(setFilter(''));
    if (form) {
      form.current.reset();
    } */
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  return {isLoading, visibleContacts,contacts, onAddContact, onDeleteContact};
};
