import {  Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Colors } from '../common/COLORS';


export default function Home() {

  return (
      <Flex
        direction="column"
        spacing="20px"
        px="32px"
        py="16px"
        w={[400, 500, 700]}
      >
        <Heading py="24px" fontWeight="500" color={Colors.blue}>
          Hello, stranger :)
        </Heading>
        <Box w={[300, 400, 500]}>
          <Text fontSize="24px" color={Colors.blue}>
            Here you can store your contacts and retrieve them whenever you need
            to.
          </Text>
        </Box>
        <Text mt="16px" fontSize="20px" color={Colors.blue}>
          Please login or register to enjoy the service.
        </Text>
      </Flex>
  );
}

