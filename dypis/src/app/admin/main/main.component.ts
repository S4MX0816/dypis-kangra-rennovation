import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styles: [
    `
      .main {
        display: flex;
        gap: 64px;
      }

      h1 {
        margin-bottom: 32px;
      }
    `,
  ],
})
export class MainComponent {
  title = '';

  constructor(router: Router) {
    router.navigate(['/admin/main/documents']);
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const heading = event.url.split('/').at(-1) || 'DEMO';
        this.title = heading[0].toUpperCase() + heading.slice(1);
      }
    });
  }
}
