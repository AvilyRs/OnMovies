import { object, string } from "yup";

export const loginSchema = object({
  email:
    string()
    .email("Por favor insira um E-mail válido")
    .required("O campo E-mail é obrigatório"),
  password:
    string()
    .min(5, "Sua senha deve conter no mínimo 5 caracteres")
    .required("O campo E-mail é obrigatório"),
});
