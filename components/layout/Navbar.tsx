import { Center, Flex, Text } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <>
      <Flex>
        <Center w="100px" bg="green.500">
          <Text>Navbar 1</Text>
        </Center>
        <Center bg="blue.500" size="150px">
          <Text>Navbar 2</Text>
        </Center>
        <Center flex="1" bg="tomato">
          <Text>Navbar 3</Text>
        </Center>
      </Flex>
    </>
  );
}
