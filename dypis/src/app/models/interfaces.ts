import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SingleMenuItem {
  name: string;
  icon: IconDefinition;
  action?: () => void;
  routerLink: string;
  routerLinkActive: string;
}

export interface MenuItem extends SingleMenuItem {
  subMenu?: SingleMenuItem[];
}

export interface BasicCard {
  name: string;
  text: string;
  image: string;
}

export interface KgActivity {
  btnTitle: string;
  btnBgColor: ColorPalette;
  heading: string;
  text: string;
}

export enum ColorPalette {
  ORANGE = '#fb6b48',
  BLUE = '#5bc4db',
  DARK_GREEN = '#879f27',
  GREEN = '#43c077',
  YELLOW = '#fac80d',
  PURPLE = '#ba82c5',
  WHITE = '#fff',
  GRAY = '#929292',
  BLACK = '#191919',
  LIGHT_BLACK = '#5b5b5b',
  DARK_BLACK = '#111',
}
