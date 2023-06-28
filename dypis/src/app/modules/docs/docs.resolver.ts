import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { DocsService } from './docs.service';

@Injectable({ providedIn: 'root' })
export class DocsResolver implements Resolve<any> {
  constructor(private readonly docsService: DocsService) {}

  resolve() {
    return this.docsService.getDocs();
  }
}
