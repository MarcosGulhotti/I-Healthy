import { ReactElement, ReactNode } from "react";

export interface ProviderChildren {
  children: ReactNode;
}

export interface IBackgroundProps {
  image: string;
  children: ReactNode;
}

export interface ComponentButton {
  children: ReactNode;
  GreenTheme?: boolean;
}

export interface SecondButtonProps {
  children: ReactNode;
  func: (value: string) => void;
  param: string;
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
