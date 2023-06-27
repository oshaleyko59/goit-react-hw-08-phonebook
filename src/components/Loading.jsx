import { Button, Flex } from '@chakra-ui/react';

export const Loading = ({isLoading}) => {
  return (
    <Flex alignItems='flex-start'>
        <Button mt='40px'
          isLoading={isLoading}
          loadingText="Loading"
          colorScheme="blue"
          variant="ghost"
          spinnerPlacement="start"
        />
    </Flex>
  );
};
