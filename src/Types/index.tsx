import { ReactElement, ReactNode } from "react";

export interface ProviderChildren {
  children: ReactNode;
}
export interface ComponentButton {
  children: ReactNode;
  GreenTheme?: boolean;
}

export interface ComponentInput {
  children?: ReactNode;
  IsSelect?: boolean;
  icon: ReactElement<any, any>;
  register: (string: string) => void;
  name: string;
  error: string;
  placeholder?: string;
  type?: string;
}
