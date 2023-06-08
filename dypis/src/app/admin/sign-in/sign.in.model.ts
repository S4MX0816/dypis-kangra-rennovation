import { FormControlCreate } from './../generic.model';

export interface SignIn {
  email: string;
  password: string;
}

export type SignInForm = FormControlCreate<SignIn>;

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export enum AutSpecs {
  LOCAL_STORAGE_KEY = 'tokenData',
}
