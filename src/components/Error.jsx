import { Text, Flex } from '@chakra-ui/react';
import { useError } from 'hooks/useError';


export const Error = () => {
  const {errMessage} = useError();
  if (!errMessage) return null;


  return (
      <Flex alignItems="flex-start">
        <Text as="h2" fontSize="24px" color="red">
          {errMessage}
        </Text>
      </Flex>
  );
};



