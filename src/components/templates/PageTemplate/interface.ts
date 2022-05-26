import { ReactElement } from "react";

export interface PageTemplateProps {
  children: ReactElement;
  section?: {
    title: string;
  }
}
