import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { DocsService } from './docs.service';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  state = 'start';
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  docs = this.docsService.docs;
  faSearch = faSearch;
  docsFilterCtrl = new FormControl<string>('');

  constructor(private readonly docsService: DocsService) {}

  onSelectDoc(document: string): void {
    window.open(document);
  }
}
