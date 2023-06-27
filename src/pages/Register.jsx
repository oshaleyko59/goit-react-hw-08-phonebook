import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { PasswordInput } from '../components/PasswordInput';
import { Input, Button, FormLabel, Stack, Box, VStack } from '@chakra-ui/react';

export default function  Register() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const passwordCopy = form.elements.passwordCopy.value;

    if (password === passwordCopy) {
      console.debug('Submit Register>>');
      dispatch(register({ name, email, password }));
      form.reset();

    } else {
      return alert('Passwords do not match');
    }
  };

  return (
    <VStack>
      <Stack as="form" onSubmit={onSubmit} pt="32px" spacing="20px">
        <Box>
          <FormLabel>name</FormLabel>
          <Input
            name="name"
            type="text"
            required
            minLength={3}
            maxLength={30}
            placeholder="name"
          />
        </Box>
        <Box>
          <FormLabel>email</FormLabel>
          <Input
            name="email"
            type="email"
            required
            minLength={3}
            maxLength={30}
            placeholder="email"
            autoComplete="user-name"
          />
        </Box>
        <Box>
          <FormLabel>password</FormLabel>
          <PasswordInput name={'password'} autoComplete="new-password" />
        </Box>
        <Box>
          <FormLabel>confirm password</FormLabel>
          <PasswordInput name={'passwordCopy'} autoComplete="new-password" />
        </Box>
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </Stack>
    </VStack>
  );
};
