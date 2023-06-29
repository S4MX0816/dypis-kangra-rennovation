import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Doc } from 'src/app/models/interfaces';
import { DocsService } from 'src/app/modules/docs/docs.service';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss'],
})
export class DocumentsTableComponent {
  @Input() docs$ = new BehaviorSubject<Doc[]>([]);
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor(private readonly docsService: DocsService) {}

  deleteDocument(docIndex: number) {
    this.docsService.deleteDoc(docIndex);
  }
}
