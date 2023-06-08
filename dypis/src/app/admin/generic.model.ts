import { FormControl, FormGroup } from '@angular/forms';

export type FormControlCreate<T> = {
  [K in keyof T]: T[K] extends object
    ? FormGroup<FormControlCreate<T[K]>>
    : FormControl<T[K] | null>;
};
