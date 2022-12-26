import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'information-updating',
  templateUrl: './information-updating.component.html',
  styleUrls: ['./information-updating.component.scss'],
})
export class InformationUpdatingComponent {
  compName = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((res) => {
      this.compName = res['compName'];
    });
  }
}
