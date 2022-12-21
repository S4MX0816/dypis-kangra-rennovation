import { environment } from '../../environments/environment';
import { router } from '../app.module';

export const openAdmission = () => {
  window.open(environment.admissionLink, '_blank');
};

export const openMaps = () => {
  window.open(environment.mapsLink, '_target');
};

export const goToRoute = (routeLink: string[]) => {
  router.navigate(routeLink);
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
