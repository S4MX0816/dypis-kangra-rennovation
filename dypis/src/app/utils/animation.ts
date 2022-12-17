import {
  animate,
  keyframes,
  state,
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

export const zoomInUpAnimation = [
  trigger('zoomInUp', [
    state(
      'start',
      style({
        opacity: 0,
        transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
      })
    ),
    transition(
      'start=>final',
      animate(
        '1s',
        keyframes([
          style({
            opacity: 1,
            transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
            offset: 0.6,
          }),
          style({
            opacity: 1,
            transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
            animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
            offset: 1,
          }),
        ])
      )
    ),
  ]),
];

export const bounceInUpAnimation = [
  trigger('bounceInUp', [
    state(
      'start',
      style({
        opacity: 0,
        transform: 'translateY(400px)',
      })
    ),
    transition(
      'start=>final',
      animate(
        '1s',
        keyframes([
          style({
            opacity: 1,
            transform: 'translateY(-30px)',
            offset: 0.6,
          }),
          style({
            transform: 'translateY(10px);',
            offset: 0.8,
          }),
          style({
            transform: 'translateY(0)',
            offset: 1,
          }),
        ])
      )
    ),
  ]),
];
