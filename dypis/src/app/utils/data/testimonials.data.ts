import {
  faBookOpen,
  faLockOpen,
  faSuitcase,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import {
  ColorPalette,
  SchoolStat,
  testimonial,
} from 'src/app/models/interfaces';

export const schoolStats: SchoolStat[] = [
  {
    name: 'teacher',
    totalNo: 31,
    circleColor: ColorPalette.YELLOW,
    icon: faUserTie,
  },
  {
    name: 'classes',
    totalNo: 49,
    circleColor: ColorPalette.PURPLE,
    icon: faBookOpen,
  },
  {
    name: 'student',
    totalNo: 445,
    circleColor: ColorPalette.ORANGE,
    icon: faSuitcase,
  },
  {
    name: 'activities',
    totalNo: 58,
    circleColor: ColorPalette.GREEN,
    icon: faLockOpen,
  },
];

export const testimonials: testimonial[] = [
  {
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
    name: 'Peter Parker',
    image: '/assets/images/student-parents/parent-1.png',
    designation: 'Father',
  },
  {
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
    name: 'Vickey verma',
    image: '/assets/images/student-parents/parent-1.png',
    designation: 'Father',
  },
  {
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
    name: 'Peter Parker',
    image: '/assets/images/student-parents/parent-1.png',
    designation: 'Father',
  },
  {
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa',
    name: 'Peter Parker',
    image: '/assets/images/student-parents/parent-1.png',
    designation: 'Vickey verma',
  },
];
