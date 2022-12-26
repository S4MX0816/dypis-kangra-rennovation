import {
  faAddressCard,
  faBook,
  faCalendarDays,
  faChalkboardUser,
  faFilePen,
  faGraduationCap,
  faHeadSideCough,
  faHome,
  faLightbulb,
  faMobileScreen,
  faPhone,
  faSchool,
  faUsersRectangle,
} from '@fortawesome/free-solid-svg-icons';

import { openAdmission } from '../helpers';
import { MenuItem } from '../../models/interfaces';

const routerLinkActive = 'active-menu-item';

export const menuItems: MenuItem[] = [
  {
    name: 'home',
    icon: faHome,
    routerLink: 'home',
    routerLinkActive,
  },
  {
    name: 'admission',
    icon: faSchool,
    action: openAdmission,
    routerLink: '',
    routerLinkActive: '',
  },
  {
    name: 'academics',
    icon: faGraduationCap,
    routerLink: null,
    routerLinkActive: '',
    subMenu: [
      {
        name: 'courses of study',
        icon: faBook,
        routerLink: 'courses-of-study',
        routerLinkActive,
      },
      {
        name: 'examination and promotion',
        icon: faFilePen,
        routerLink: 'examination-and-promotion',
        routerLinkActive,
      },
      {
        name: 'date sheet',
        icon: faCalendarDays,
        routerLink: 'date-sheet',
        routerLinkActive,
      },
      {
        name: 'virtual schooling',
        icon: faMobileScreen,
        routerLink: 'virtual-schooling',
        routerLinkActive,
      },
    ],
  },
  {
    name: 'faculty',
    icon: faChalkboardUser,
    routerLink: 'faculty',
    routerLinkActive,
  },
  {
    name: 'about us',
    icon: faAddressCard,
    routerLink: null,
    routerLinkActive: '',
    subMenu: [
      {
        name: 'about dypis',
        icon: faUsersRectangle,
        routerLink: 'about-dypis',
        routerLinkActive,
      },
      {
        name: 'vision and mission',
        icon: faLightbulb,
        routerLink: 'vision-and-mission',
        routerLinkActive,
      },
      {
        name: "chairman's message",
        icon: faHeadSideCough,
        routerLink: 'chairman-message',
        routerLinkActive,
      },
    ],
  },
  {
    name: 'contact us',
    icon: faPhone,
    routerLink: 'contact-us',
    routerLinkActive,
  },
];
