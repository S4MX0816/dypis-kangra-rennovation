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
