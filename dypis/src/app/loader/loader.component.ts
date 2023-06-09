import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'loader',
  template: `
    <div *ngIf="isLoading$ | async" class="loader">
      <div class="ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading$ = this.loaderService.isLoading$;
  constructor(private readonly loaderService: LoaderService) {}
}
