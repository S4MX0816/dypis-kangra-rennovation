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
import { openAdmission, routeToLink } from './helpers';

const routerLinkActive = 'active-menu-item';

interface SingleMenuItem {
  name: string;
  icon: IconDefinition;
  action: () => void;
  routerLinkActive: string;
}

export interface MenuItem extends SingleMenuItem {
  subMenu?: SingleMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: 'home',
    icon: faHome,
    action: routeToLink.bind(this, 'home'),
    routerLinkActive,
  },
  {
    name: 'admission',
    icon: faSchool,
    action: openAdmission,
    routerLinkActive,
  },
  {
    name: 'academics',
    icon: faGraduationCap,
    action: routeToLink.bind(this, null),
    routerLinkActive: '',
    subMenu: [
      {
        name: 'courses of study',
        icon: faBook,
        action: routeToLink.bind(this, 'courses of study'),
        routerLinkActive,
      },
      {
        name: 'examination and promotion',
        icon: faFilePen,
        action: routeToLink.bind(this, 'examination and promotion'),
        routerLinkActive,
      },
      {
        name: 'date sheet',
        icon: faCalendarDays,
        action: routeToLink.bind(this, 'date sheet'),
        routerLinkActive,
      },
      {
        name: 'virtual schooling',
        icon: faMobileScreen,
        action: routeToLink.bind(this, 'virtual schooling'),
        routerLinkActive,
      },
    ],
  },
  {
    name: 'faculty',
    icon: faChalkboardUser,
    action: routeToLink.bind(this, 'faculty'),
    routerLinkActive,
  },
  {
    name: 'about us',
    icon: faAddressCard,
    action: routeToLink.bind(this, 'about us'),
    routerLinkActive: '',
    subMenu: [
      {
        name: 'about dypis',
        icon: faUsersRectangle,
        action: routeToLink.bind(this, 'about dypis'),
        routerLinkActive,
      },
      {
        name: 'vision and mission',
        icon: faLightbulb,
        action: routeToLink.bind(this, 'vision and mission'),
        routerLinkActive,
      },
      {
        name: "chairman's message",
        icon: faHeadSideCough,
        action: routeToLink.bind(this, "chairman's message"),
        routerLinkActive,
      },
    ],
  },
  {
    name: 'contact us',
    icon: faPhone,
    action: routeToLink.bind(this, 'contact us'),
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
