import { animate, style, transition, trigger } from '@angular/animations';

const transisitionDuration = '300ms ease-in-out';

export const hamburgerSildingAnimation = [
  trigger('hamburgerSlideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate(transisitionDuration, style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
      animate(transisitionDuration, style({ transform: 'translateX(100%)' })),
    ]),
  ]),
];
