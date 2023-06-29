import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Doc } from './../../../../../models/interfaces';
import { DocsService } from 'src/app/modules/docs/docs.service';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss'],
})
export class DocumentFormComponent {
  path?: string;
  file?: File;
  documentName?: string;
  faClose = faClose;
  isUploading = false;

  userDocName = new FormControl('', Validators.required);

  constructor(
    private fireStorage: AngularFireStorage,
    private docsService: DocsService
  ) {}

  attachDocument(inputEl: HTMLInputElement) {
    const files = inputEl.files;
    if (!files || !files[0]) {
      return;
    }

    this.file = files[0];
    this.documentName = this.file.name;
    this.path = `docs/${this.documentName}`;

    inputEl.value = '';
  }

  async saveDocument() {
    const docName = this.userDocName.value;
    if (!this.path || !this.file || !docName) {
      return;
    }

    this.isUploading = true;
    const uploadTask = await this.fireStorage.upload(this.path, this.file);
    const url = await uploadTask.ref.getDownloadURL();
    this.isUploading = false;

    this.docsService.updateDocs(new Doc(docName, url));
    this.resetForm();
  }

  private resetForm() {
    this.resetDocumentAttachment();
    this.userDocName.reset();
  }

  resetDocumentAttachment() {
    this.path = undefined;
    this.documentName = undefined;
    this.file = undefined;
  }
}
