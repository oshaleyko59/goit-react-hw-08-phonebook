import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import authOperations from '../redux/auth/auth-operations';
import { PasswordInput } from '../components/PasswordInput';
import { Input, Button, FormLabel, Stack, Box, VStack, Text} from '@chakra-ui/react';

export default function Register() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const passwordCopy = form.elements.passwordCopy.value;

    if (password === passwordCopy) {
      const newUser = { name, email, password };

      dispatch(authOperations.register(newUser));
      form.reset();
    } else {
      toast.error('Passwords do not match');
      return console.error('Passwords do not match');
    }
  };

  return (
    <VStack>
      <Text as="h2" fontSize="24px">
        Register:
      </Text>
      <Stack as="form" onSubmit={onSubmit} pt="32px" spacing="20px">
        <Box>
          <FormLabel>
            name
            <Input
              name="name"
              autoComplete="username"
              type="text"
              required
              minLength={3}
              maxLength={60}
            />
          </FormLabel>
        </Box>
        <Box>
          <FormLabel>
            email
            <Input
              name="email"
              type="email"
              required
              minLength={5}
              maxLength={60}
              autoComplete="email"
            />
          </FormLabel>
        </Box>
        <Box>
          <FormLabel>
            password
            <PasswordInput
              name={'password'}
              autoComplete="new-password"
            />
          </FormLabel>
        </Box>
        <Box>
          <FormLabel>
            confirm password
            <PasswordInput
              name={'passwordCopy'}
              autoComplete="new-password"
            />
          </FormLabel>
        </Box>
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </Stack>
    </VStack>
  );
}


/*   //========================TEST USER===========================
  const testUser = () => {
    const rand = Math.floor(Math.random() * 1000).toString();
    const name = 'name' + rand;
    const email = name + '@gmail.com';
    const password = 'examplepwd+' + rand;

    return { name, email, password };
  };

  const onClick = () => {
    const newUser = testUser();
    dispatch(authOperations.register(newUser));
  };


        <Button type="button" colorScheme="blue" onClick={onClick}>
          Register TEST USER
        </Button>
  */


