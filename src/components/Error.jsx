//import PropTypes from 'prop-types';
import { Text, Flex } from '@chakra-ui/react';
//import { Colors } from 'common/COLORS';

const ERR_UNKNOWN = 'Something unexpected happed...';

export const Error = ({ msg }) => {
  const t = typeof msg;
  console.info('Error>>', t, msg);

  if (t !== 'string') {
    msg = ERR_UNKNOWN;
  }

  return (
    <>
      <Flex alignItems="flex-start">
        <Text as="h2" fontSize="24px" color="red">
          {msg}
        </Text>
      </Flex>
    </>
  );
};

/* Error.propTypes = {
  msg: PropTypes.string,
}; */
