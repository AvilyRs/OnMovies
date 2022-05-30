import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";
import { loginSchema } from "../schemas/login.schema";
import { InputTypesProps } from "./catalogs/edit/interface";
import { LoginProps } from "./interface";

export default function Home(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState<InputTypesProps>("");
  const [password, setPassword] = useState<InputTypesProps>("");

  async function loginValidate(data: LoginProps): Promise<boolean> {
    try {
      await loginSchema.validate(data);
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  async function handleSubmitLogin() {
    const data = { email, password };
    const isAuthenticated = await loginValidate(data as LoginProps);

    if (isAuthenticated) {
      router.replace("/catalogs")
    }
  }

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
      as="form"
      onSubmit={handleSubmitLogin}
      p="8"
      spacing="3"
      borderRadius={8}
      background="gray.800"
    > 
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={email}
        placeholder="exemplo@email.com"
        onChange={(field: FormEvent<HTMLInputElement>) => setEmail(field.currentTarget.value)}
      />

      <Input
        label="Senha"
        type="password"
        name="email"
        value={password}
        placeholder="*******"
        onChange={(field: FormEvent<HTMLInputElement>) => setPassword(field.currentTarget.value)}
      />

      <Box />

      <Button onClick={handleSubmitLogin}>
        Entrar
      </Button>
    </Stack>
   </Flex>
  );
}
