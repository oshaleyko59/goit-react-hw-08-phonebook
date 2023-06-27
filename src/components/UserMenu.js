import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/operations';
import { Text, HStack, Button } from '@chakra-ui/react';
import { LogoutIcon } from 'icons/LogoutIcon';
import { VerifiedUserIcon } from 'icons/VerifiedUserIcon';
import { Colors } from '../common/COLORS';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <HStack align="center" spacing="8px">
      <VerifiedUserIcon />
      <Text>{user.email}</Text>
      <Button
        onClick={() => dispatch(logout())}
        bg={Colors.bgYellow}
        color={Colors.blue}
      >
        <LogoutIcon />
      </Button>
    </HStack>
  );
};
