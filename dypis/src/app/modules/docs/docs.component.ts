import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { docs } from 'src/app/utils/data';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  docs = docs;

  constructor(private readonly http: HttpClient) {}

  onSelectDoc(index: number): void {
    const path = `/assets/docs/${docs[index]}.pdf`;
    this.http
      .get(path, { responseType: 'blob', observe: 'response' })
      .subscribe(async (res: any) => {
        const url = window.URL.createObjectURL(res.body);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${docs[index]}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }
}
