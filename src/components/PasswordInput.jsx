import { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const PasswordInput = (props) => {
  const { name, ...rest } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
       // type="password"
        required
        minLength={7}
        maxLength={30}
        name={name}
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        {...rest}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

PasswordInput.propTypes = {
    name: PropTypes.string.isRequired,
};
