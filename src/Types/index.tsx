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
  type?: string;
  onClick?: () => void;
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

export interface RegisterPaciente {
  username: string;
  email: string;
  password: string;
  date: string;
  cpf: string;
  genre: string;
  address: string;
}

export interface RegisterProfissional {
  username: string;
  date: string;
  cpf: string;
  gerenro: string;
  address: string;
  register: string;
  specialty: string;
  demands: string;
  typeCalls: string;
  schedule: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IEvents {
  title: string;
  date: string;
}

export interface IuserData {
  username: string;
  id: number;
  cpf: string;
  gender: string;
  address: string;
  specialty: string;
  events: IEvents[];
  isProfessional: boolean;
}

export interface IUserSearch {
  id?: number;
  username: string;
  specialty: string;
  gender: string;
  typeCalls: string;
  loading: boolean;
  func: () => void;
}

export interface UserProviderData {
  user: IuserData;
}

export interface AuthProviderData {
  isAuth: string;
  setIsAuth: (value: string) => void;
}
