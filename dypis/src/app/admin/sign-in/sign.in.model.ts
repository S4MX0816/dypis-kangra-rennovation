import { FormControlCreate } from './../generic.model';

export interface SignIn {
  email: string;
  password: string;
}

export type SignInForm = FormControlCreate<SignIn>;
