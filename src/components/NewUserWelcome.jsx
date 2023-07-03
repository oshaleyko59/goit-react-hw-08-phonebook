import { Text, Flex } from '@chakra-ui/react';
import { Colors } from '../common/COLORS';

export const NewUserWelcome = () => {
  return (
    <Flex
      direction="column"
      spacing="20px"
      px="32px"
      py="16px"
      w={[400, 500, 700]}
    >
      <Text fontSize="24px" color={Colors.blue}>
        Here you can store your contacts and retrieve them whenever you need to.
      </Text>
      <Text fontSize="24px" color={Colors.blue}>
        To add a new contact, you need to fii=ll in the form above and press
        Add.
      </Text>
    </Flex>
  );
};
