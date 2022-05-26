import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Home(): JSX.Element {
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
        name="email"
        placeholder="exemplo@email.com"
      />

      <Input
        label="Senha"
        name="email"
        placeholder="*******"
      />

      <Box />

      <Button>Entrar</Button>
    </Stack>
   </Flex>
  );
}
