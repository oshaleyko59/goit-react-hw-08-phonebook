import {  Heading, Text, VStack } from "@chakra-ui/react";
import { Colors } from '../common/COLORS';


export default function Home() {

  return (
    <div>
      <VStack spacing="20px" px="16px" py="16px">
        <Heading pt="24px" fontWeight="500" color={Colors.blue}>
          Hello, stranger :)
        </Heading>
        <Text fontSize="24px" color={Colors.blue}>
          Here you can store your contacts and retrieve them whenever you need to.
        </Text>
        <Text fontSize="24px" color={Colors.blue}>
          Please login or register to enjoy the service.
        </Text>
      </VStack>
    </div>
  );
}

