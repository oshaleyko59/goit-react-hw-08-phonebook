import { Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const Loading = ({ loadingText, isLoading }) => {
  return (
    <Flex alignItems="flex-start">
      <Button
        mt="20px"
        isLoading={isLoading}
        loadingText={loadingText}
        colorScheme="blue"
        variant="ghost"
        spinnerPlacement="start"
      />
    </Flex>
  );
};

Loading.propTypes = {
  contact: PropTypes.shape({
    isLoading: PropTypes.bool
  })
};
