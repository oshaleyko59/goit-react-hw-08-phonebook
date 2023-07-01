import { useDispatch} from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import useAuth from 'hooks/useAuth';
//import { selectUser } from 'redux/auth/authSelectors';
//import { logout } from 'redux/auth/operations';
import { Text,Button, Flex } from '@chakra-ui/react';
import { LogoutIcon } from 'icons/LogoutIcon';
import { VerifiedUserIcon } from 'icons/VerifiedUserIcon';
import { Colors } from '../common/COLORS';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth().user; //useSelector(authSelectors.selectUser);

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

/* FIXME:
 <Flex minWidth='max-content' alignItems='center' gap='2'>
<VerifiedUserIcon />
*/
/*

        bg={Colors.bgYellow}
        color={Colors.blue}
        variant="solid"

const Button = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid ${Colors.blue};
  background-color: ${Colors.bgYellow};
  color: ${Colors.blue};

  &:hover,
  &:focus {
    outline: solid 2px ${Colors.blue};
    background-color: ${Colors.yellow};
  }
`;
 */
