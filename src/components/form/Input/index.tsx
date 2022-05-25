import {
  FormControl,
  FormLabel,
  Input as ChakraInput
} from "@chakra-ui/react";
import { InputProps } from "./interface";

export function Input({ label, name, ...rest }: InputProps): JSX.Element {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <ChakraInput
        name={name}
        variant="filled"
        background="gray.700"
        _hover={{
          background: "gray.600"
        }}
        {...rest}
      />
    </FormControl>
  );
}
