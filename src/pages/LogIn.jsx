import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { PasswordInput } from '../components/PasswordInput';
import { Input, Button, FormLabel, Stack, Box, VStack, Text } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';

export default function LogIn() {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    toast('on Submit');
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.debug('Submit Log in>>'); dispatch(login({ email, password }));
/*     try {
      await dispatch(login({ email, password })).unwrap();
			// navigate('/')
      toast.success('Welcome', {
        duration: 6000,
        position: 'top-center',
        icon: '👏',
      });
		} catch (error) {
			toast.error('Error Login', {
        duration: 6000,
        position: 'top-center',
        icon: '👏',
      });
		} */

  //  form.reset();
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
        <Toaster />
      </Stack>
    </VStack>
  );
};
