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

interface SingleMenuItem {
  name: string;
  icon: IconDefinition;
}

interface MenuItem extends SingleMenuItem {
  subMenu?: SingleMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: 'home',
    icon: faHome,
  },
  {
    name: 'admission',
    icon: faSchool,
  },
  {
    name: 'academics',
    icon: faGraduationCap,
    subMenu: [
      {
        name: 'courses of study',
        icon: faBook,
      },
      {
        name: 'examination and promotion',
        icon: faFilePen,
      },
      {
        name: 'date sheet',
        icon: faCalendarDays,
      },
      {
        name: 'virtual schooling',
        icon: faMobileScreen,
      },
    ],
  },
  {
    name: 'faculty',
    icon: faChalkboardUser,
  },
  {
    name: 'about us',
    icon: faAddressCard,
    subMenu: [
      {
        name: 'about dypi',
        icon: faUsersRectangle,
      },
      {
        name: 'vision and mission',
        icon: faLightbulb,
      },
      {
        name: "chairman's message",
        icon: faHeadSideCough,
      },
    ],
  },
  {
    name: 'contact us',
    icon: faPhone,
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
