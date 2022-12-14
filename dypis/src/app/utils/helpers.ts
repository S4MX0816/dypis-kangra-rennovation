import { environment } from '../../environments/environment';

export const openAdmission = () => {
  window.open(environment.admissionLink, '_blank');
};
