import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
   <Flex
    align="center"
    justify="center"
    height="100vh"
    width="100vw"
    direction="column"
   >
    <Heading mb="8" color="purple.600">
       OnMovies
    </Heading>

    <Stack
      p="8"
      spacing="3"
      borderRadius={8}
      background="gray.800"
    > 
      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="exemplo@email.com"
      />

      <Input
        label="Senha"
        type="password"
        name="email"
        placeholder="*******"
      />

      <Box />

      <Button
        onClick={() => router.replace("/catalogs")}
      >
        Entrar
      </Button>
    </Stack>
   </Flex>
  );
}
