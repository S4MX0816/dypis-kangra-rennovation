import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-information-updating',
  templateUrl: './information-updating.component.html',
  styleUrls: ['./information-updating.component.scss'],
})
export class InformationUpdatingComponent implements OnInit {
  compName = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((res) => {
      this.compName = res['compName'];
    });
  }

  ngOnInit(): void {}
}
