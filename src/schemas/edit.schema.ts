import { object, string } from "yup";

export const editSchema = object({
  title:
    string()
    .min(2, "O Título deve conter no mínimo 2 caracteres")
    .required("O campo Título é obrigatório"),
  releaseDate:
    string()
    .min(4, "O Ano deve conter no mínimo 4 caracteres")
    .max(4, "O Ano deve conter no máximo 4 caracteres")
    .required("O campo Ano é obrigatório"),
  voteAverage:
    string()
    .min(4, "O Nota deve conter no mínimo 4 caracteres")
    .max(4, "O Nota deve conter no máximo 4 caracteres")
    .required("O campo Nota é obrigatório"),
});
