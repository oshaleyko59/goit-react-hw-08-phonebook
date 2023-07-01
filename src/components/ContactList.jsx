import { useSelector } from 'react-redux';
import {
  selectShownContacts,
} from 'redux/contacts/contacts-selectors';
import { ContactListItem } from 'components/ContactListItem';
import { List, Box } from '@chakra-ui/react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectShownContacts);

  return (
    <Box>
      {visibleContacts && (
        <List spacing={3}>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </List>
      )}
    </Box>
  );
};

