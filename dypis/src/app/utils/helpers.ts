import { router } from '../app.module';
import { environment } from '../../environments/environment';

const BLUE = '#5bc4db';

export const openAdmission = () => {
  window.open(environment.admissionLink, '_blank');
};

export const routeToLink = (routeLink: string | null) => {
  if (!routeLink) {
    return;
  }
  router.navigate([routeLink]);
};
