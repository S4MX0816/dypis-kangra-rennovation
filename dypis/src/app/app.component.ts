import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onActivate(divEl: HTMLDivElement) {
    divEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
