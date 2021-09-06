import { ReactNode } from "react";

export interface ProviderChildren {
  children: ReactNode;
}

export interface IBackgroundProps {
  image: string;
}

export interface ComponentButton {
  children: ReactNode;
  GreenTheme?: boolean;
}
