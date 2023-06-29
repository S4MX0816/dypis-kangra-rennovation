import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Doc } from 'src/app/models/interfaces';
import { DocsService } from 'src/app/modules/docs/docs.service';
import { UpdateNameDialogComponent } from '../dialogs/update-name-dialog/update-name-dialog.component';
import { DeleteConfirmationDialogComponent } from '../dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';

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

  updateName(docIndex: number, docName: string) {
    const dialog = this.dialog.open(UpdateNameDialogComponent, {
      width: '450px',
      data: { name: docName },
    });

    dialog.afterClosed().subscribe((updateName) => {
      if (!updateName) {
        return;
      }

      this.docsService.updateDocName(docIndex, updateName);
    });
  }
}
