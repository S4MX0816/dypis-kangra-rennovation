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
  faLocationDot,
  faMobileScreen,
  faPhone,
  faSchool,
  faSquareEnvelope,
  faUsersRectangle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { openAdmission } from './helpers';

const routerLinkActive = 'active-menu-item';

interface SingleMenuItem {
  name: string;
  icon: IconDefinition;
  action?: () => void;
  routerLink: string;
  routerLinkActive: string;
}

interface Facility {
  name: string;
  text: string;
  image: string;
}

export interface MenuItem extends SingleMenuItem {
  subMenu?: SingleMenuItem[];
}

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
    routerLink: '',
    routerLinkActive: '',
    subMenu: [
      {
        name: 'courses of study',
        icon: faBook,
        routerLink: 'courses of study',
        routerLinkActive,
      },
      {
        name: 'examination and promotion',
        icon: faFilePen,
        routerLink: 'examination and promotion',
        routerLinkActive,
      },
      {
        name: 'date sheet',
        icon: faCalendarDays,
        routerLink: 'date sheet',
        routerLinkActive,
      },
      {
        name: 'virtual schooling',
        icon: faMobileScreen,
        routerLink: 'virtual schooling',
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
    routerLink: '',
    routerLinkActive: '',
    subMenu: [
      {
        name: 'about dypis',
        icon: faUsersRectangle,
        routerLink: 'about dypis',
        routerLinkActive,
      },
      {
        name: 'vision and mission',
        icon: faLightbulb,
        routerLink: 'vision and mission',
        routerLinkActive,
      },
      {
        name: "chairman's message",
        icon: faHeadSideCough,
        routerLink: "chairman's message",
        routerLinkActive,
      },
    ],
  },
  {
    name: 'contact us',
    icon: faPhone,
    routerLink: 'contact us',
    routerLinkActive,
  },
];

export const addressDetails = [
  {
    detail:
      'Near 53 Miles, Thanpuri Chowk Palampur Nagrota Road, Tanda Medical College Rd, Rajana Khas, Himachal Pradesh 176001',
    icon: faLocationDot,
  },
  {
    detail: '+91 83445 00005, +91 78070 80536',
    icon: faPhone,
  },
  {
    detail: 'dypisk@gmail.com',
    icon: faSquareEnvelope,
  },
];

export const facilities: Facility[] = [
  {
    name: 'school bus',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/bus.png',
  },
  {
    name: 'custom food',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/french-fries.png',
  },
  {
    name: 'science labs',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/bulb.png',
  },
  {
    name: 'world classes',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/pencil.png',
  },
  {
    name: 'funny games',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/book.png',
  },
  {
    name: 'great facilities',
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un',
    image: '/assets/images/trophy.png',
  },
];
