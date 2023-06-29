import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/operations';
import { PasswordInput } from '../components/PasswordInput';
import { Input, Button, FormLabel, Stack, Box, VStack } from '@chakra-ui/react';

export default function Register() {
  const dispatch = useDispatch();
  //=============================================================
  const testUser = () => {
    const rand = Math.floor(Math.random() * 1000).toString();
    const name = 'name' + rand;
    const email =
      name + '@gmail.com';
    const password = 'examplepwd+' + rand;

    return { name, email, password };
  };
  //=============================================================

  const onClick = () => {
    const newUser = testUser();
    console.debug('Submit TEST Register>>', newUser);
    dispatch(register(newUser));
  };
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const passwordCopy = form.elements.passwordCopy.value;

    if (password === passwordCopy) {
      const newUser = { name, email, password };

      console.debug('Submit Register>>', newUser);
      dispatch(register(newUser));
      form.reset();
    } else {
      toast.error('Passwords do not match');
      return console.error('Passwords do not match');
    }
  };

  return (
    <VStack>
      <Stack as="form" onSubmit={onSubmit} pt="32px" spacing="20px">
        <Box>
          <FormLabel>
            name
            <Input
              name="name"
              id="name"
              autoComplete="username"
              type="text"
              required
              minLength={3}
              maxLength={30}
              placeholder="name"
            />
          </FormLabel>
        </Box>
        <Box>
          <FormLabel>email
          <Input
            name="email"
            type="email"
            id="email"
            required
            minLength={3}
            maxLength={30}
            placeholder="email"
            autoComplete="email"
          /></FormLabel>
        </Box>
        <Box>
          <FormLabel >password
          <PasswordInput
            id="password"
            name={'password'}
            autoComplete="new-password"
          /></FormLabel>
        </Box>
        <Box>
          <FormLabel>confirm password
          <PasswordInput
            id="copypwd"
            name={'passwordCopy'}
            autoComplete="new-password"
          /></FormLabel>
        </Box>
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
        <Button type="button" colorScheme="blue" onClick={onClick}>
          Register TEST USER
        </Button>
      </Stack>
    </VStack>
  );
}
