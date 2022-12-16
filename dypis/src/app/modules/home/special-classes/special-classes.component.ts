import { Component } from '@angular/core';
import { specialClasses } from 'src/app/utils/data';

@Component({
  selector: 'special-classes',
  templateUrl: './special-classes.component.html',
  styleUrls: ['./special-classes.component.scss'],
})
export class SpecialClassesComponent {
  specialClasses = specialClasses.slice(0, 4);
  backup = specialClasses;
  readonly EXTRA_LARGE = 1920;
  readonly LARGE = 1280;
  readonly MEDIUM = 960;
  readonly SMALL = 600;

  constructor() {
    this.onResize(window);
  }

  onResize(w: EventTarget | null) {
    const windowWidth = (w as Window)?.innerWidth;
    if (windowWidth < this.SMALL) {
      console.log('small');
      this.specialClasses = this.backup.slice(0, 1);
      return;
    }
    if (windowWidth < this.MEDIUM) {
      console.log('medium');
      this.specialClasses = this.backup.slice(0, 2);
      return;
    }
    if (windowWidth < this.LARGE) {
      console.log('large');
      this.specialClasses = this.backup.slice(0, 3);
      return;
    }

    console.log('laptop');
    this.specialClasses = this.backup.slice(0, 4);
  }
}
