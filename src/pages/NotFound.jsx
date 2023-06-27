import { Box, Text } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';

export default function NotFound() {
  return (
    <Box mt='120px'>
      <Text fontSize="24px" color={Colors.blue}>
        The page is not found...
      </Text>
    </Box>
  );
}
