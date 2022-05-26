import { Flex, Heading, Icon } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { Button } from "../form/Button";

export function Navbar(): JSX.Element {
  return (
    <Flex
      p="4"
      px="20"
      align="center"
      justify="space-between"
      background="gray.800"
    >
      <Heading
      color="purple.600"
      fontSize="2xl"
      >
        OnMovies
      </Heading>


      <Flex>
        <Button variant="ghost">
          Sair <Icon ml="2" as={FiLogOut} />
        </Button>
      </Flex>
    </Flex>
  );
}
