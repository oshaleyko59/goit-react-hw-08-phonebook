import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
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

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(login({ email, password }));
  };

  return (
    <VStack>
      <Stack as="form" onSubmit={onSubmit} pt="32px" spacing="20px">
        <Text as="h2" fontSize="24px">
          Log In
        </Text>
        <Box>
          <FormLabel>email</FormLabel>
          <Input
            name="email"
            placeholder="email"
            required
            minLength={3}
            maxLength={30}
            autoComplete="username"
          />
        </Box>
        <Box>
          <FormLabel>password</FormLabel>
          <PasswordInput name={'password'} autoComplete="current-password" />
        </Box>
        <Button type="submit" colorScheme="blue">
          Log in
        </Button>
      </Stack>
    </VStack>
  );
}