import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";

export function Navbar(): JSX.Element {
  const router = useRouter();
  
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
          <Button
            background="whiteAlpha.200"
            _hover={{
              background: "whiteAlpha.300"
            }}
            _active={{
              background: "whiteAlpha.100"
            }}
            onClick={() => router.replace("/")}
          >
            Sair <Icon ml="2" as={FiLogOut} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
