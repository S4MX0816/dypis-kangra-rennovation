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

const imageTransitionDuration = '600ms 300ms ease-out';
export const guyCarouselAnimation = [
  trigger('guySlidingUp', [
    transition(':enter', [
      style({
        transform: 'translateY(115%)',
      }),
      animate(
        imageTransitionDuration,
        keyframes([style({ transform: 'translateY(0)' })])
      ),
    ]),
  ]),
];

export const roboticsKidCarouselAnimation = [
  trigger('roboticsKidSlidingUp', [
    transition(':enter', [
      style({
        transform: 'translateY(115%) scaleX(-1)',
      }),
      animate(
        imageTransitionDuration,
        keyframes([style({ transform: 'translateY(0) scaleX(-1)' })])
      ),
    ]),
  ]),
];

export const textBlockCarouselAnimation = [
  trigger('textBlockSlidingUp', [
    transition(':enter', [
      style({
        transform: 'translateY(2%)',
        opacity: 0.4,
      }),
      animate(
        '2s ease-in',
        keyframes([style({ transform: 'translateY(0)', opacity: 1 })])
      ),
    ]),
  ]),
];
