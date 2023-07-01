import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Text, HStack, Button, ListIcon} from '@chakra-ui/react';

import { deleteContact } from 'redux/contacts/contacts-operations';
import { CloseIcon } from 'icons/CloseIcon';
import { PhoneIcon } from 'icons/PhoneIcon'
import { LiIcon } from 'icons/LiIcon';
import { Colors } from '../common/COLORS';

export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <HStack justifyContent='space-between'>
      <HStack flexGrow={1}>
        <ListIcon as={LiIcon} />
        <Text fontWeight="400" fontSize="20px" color={Colors.blue}>
          {contact.name}
        </Text>
      </HStack>
      <HStack>
        <PhoneIcon />
        <Text fontWeight="400" fontSize="20px" color={Colors.blue}>
          {contact.number ? (
            <Text as="a" href={'tel:' + contact.number}>
              {contact.number}
            </Text>
          ) : (
            'not set'
          )}
        </Text>
      </HStack>
      <Button
        type="button"
        variant='ghost'
        onClick={onDelete}
        colorScheme="yellow"
        height="20px"
        p="4px"
      >
        <CloseIcon />
      </Button>
    </HStack>
  );
};

ContactListItem.propTypes = {
  contact:    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
  }).isRequired
};
