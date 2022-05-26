import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { Button } from "../form/Button";

export function Navbar(): JSX.Element {
  return (
    <Box background="gray.800">
      <Flex
        p="4"
        align="center"
        justify="space-between"
        maxWidth={1200}
        mx="auto"
      >
        <Heading
        color="purple.600"
        fontSize="2xl"
        >
          <Link href="/">
            OnMovies
          </Link>
        </Heading>


        <Box>
          <Button variant="ghost">
            Sair <Icon ml="2" as={FiLogOut} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
