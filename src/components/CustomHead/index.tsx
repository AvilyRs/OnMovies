import Head from "next/head";
import { CustomHeadProps } from "./interface";

export function CustomHead({ title }: CustomHeadProps): JSX.Element {
  return (
    <Head>
      <title>{title ? `${title} | OnMovies` : title}</title>
    </Head>
  )
}