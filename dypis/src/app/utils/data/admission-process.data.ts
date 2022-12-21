import {
  faCircleQuestion,
  faMapLocationDot,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import { AdmissionProcess } from 'src/app/models/interfaces';
import { goToRoute, openAdmission, openMaps } from '../helpers';

export const admissionProcess: AdmissionProcess[] = [
  {
    icon: faCircleQuestion,
    title: 'Request info',
    btnText: 'Request info',
    action: goToRoute.bind(undefined, ['contact-us']),
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
  },
  {
    icon: faPenToSquare,
    title: 'Admission Form',
    btnText: 'Apply now',
    action: openAdmission,
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
  },
  {
    icon: faMapLocationDot,
    title: 'Locate us on map',
    btnText: 'Locate us',
    action: openMaps,
    text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.',
  },
];
