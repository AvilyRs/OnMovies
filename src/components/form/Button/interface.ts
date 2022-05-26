import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}
