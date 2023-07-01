import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations'; //import { login } from 'redux/auth/opera tions';
import { PasswordInput } from '../components/PasswordInput';
import {
  Input,
  Button,
  FormLabel,
  Stack,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';

export default function LogIn() {
  const dispatch = useDispatch();
  /* FIXME: ????
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
 */
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <VStack>
      <Text as="h2" fontSize="24px">
        Log in:
      </Text>
      <Stack as="form" onSubmit={onSubmit} pt="32px" spacing="20px">
        <Box>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            required
            minLength={5}
            maxLength={60}
            autoComplete="email"
          />
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <PasswordInput
            name={'password'}
            autoComplete="current-password"
          />
        </Box>
        <Button type="submit" colorScheme="blue">
          Log in
        </Button>
      </Stack>
    </VStack>
  );
}
