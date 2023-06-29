import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Doc } from 'src/app/models/interfaces';
import { DocsService } from 'src/app/modules/docs/docs.service';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss'],
})
export class DocumentsTableComponent {
  @Input() docs$ = new BehaviorSubject<Doc[]>([]);
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor(
    private readonly dialog: MatDialog,
    private readonly docsService: DocsService
  ) {}

  deleteDocument(docIndex: number) {
    const dialog = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '450px',
    });

    dialog.afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }

      this.docsService.deleteDoc(docIndex);
    });
  }
}
