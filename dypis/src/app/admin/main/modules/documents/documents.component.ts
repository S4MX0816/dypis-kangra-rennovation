import { Component } from '@angular/core';
import { DocsService } from 'src/app/modules/docs/docs.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
})
export class DocumentsComponent {
  docs$ = this.docsService.docs$;

  constructor(private readonly docsService: DocsService) {}
}
