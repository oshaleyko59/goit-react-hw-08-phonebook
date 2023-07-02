import { useDispatch} from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import useAuth from 'hooks/useAuth';
import { Text,Button, Flex } from '@chakra-ui/react';
import { LogoutIcon } from 'icons/LogoutIcon';
import { VerifiedUserIcon } from 'icons/VerifiedUserIcon';
import { Colors } from '../common/COLORS';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth().user;

  return (
    <Flex  alignItems='center'>
      <VerifiedUserIcon marginRigt='4px' />
      <Text as='span'>{user.email}</Text>
      <Button
        colorScheme="blue"
        color={Colors.blue}
        variant="ghost"
        onClick={() => dispatch(authOperations.logout())}
      >
        <LogoutIcon />
      </Button>
    </Flex>
  );
};
