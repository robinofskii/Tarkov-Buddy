import { Center, Flex, Text } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <>
      <Flex>
        <Center w="100px" bg="background">
          <Text>Footer 1</Text>
        </Center>
        <Center bg="background">
          <Text>Footer 2</Text>
        </Center>
        <Center flex="1" bg="background">
          <Text>Footer 3</Text>
        </Center>
      </Flex>
    </>
  );
}
