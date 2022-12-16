import { environment } from '../../environments/environment';

export const openAdmission = () => {
  window.open(environment.admissionLink, '_blank');
};

export function updateAnimationStateOnScroll<T>(
  this: T,
  el: HTMLDivElement,
  currentState: string
) {
  if (
    currentState !== 'final' &&
    window.innerHeight - el?.getBoundingClientRect().top > 130
  ) {
    this['state' as keyof T] = 'final' as any;
  }
}
