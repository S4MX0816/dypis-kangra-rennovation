import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

const hamburgerTransisitionDuration = '300ms ease-in-out';
export const hamburgerSildingAnimation = [
  trigger('hamburgerSlideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate(
        hamburgerTransisitionDuration,
        style({ transform: 'translateX(0%)' })
      ),
    ]),
    transition(':leave', [
      animate(
        hamburgerTransisitionDuration,
        style({ transform: 'translateX(100%)' })
      ),
    ]),
  ]),
];

export const guyCarouselAnimation = [
  trigger('guySlidingUp', [
    transition(':enter', [
      style({
        transform: 'translateY(100%) scale(1.4)',
        filter: 'brightness(0) blur(10px)',
      }),
      animate(
        '1.5s 2s ease-in',
        keyframes([
          style({ transform: 'translateY(0) scale(1.4)', offset: 0.3 }),
          style({ filter: 'brightness(0) blur(10px)', offset: 0.5 }),
          style({ filter: 'brightness(1) blur(0)', offset: 1 }),
        ])
      ),
    ]),
  ]),
];
