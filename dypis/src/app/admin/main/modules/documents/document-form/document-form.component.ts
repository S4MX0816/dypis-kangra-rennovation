import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss'],
})
export class DocumentFormComponent {
  path?: string;
  file?: File;

  addDocumentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    document: new FormControl('', [Validators.required]),
  });

  constructor(private fireStorage: AngularFireStorage) {}

  async attachDocument(inputEl: HTMLInputElement) {
    const files = inputEl.files;
    if (!files || !files[0]) {
      return;
    }

    this.file = files[0];
    this.path = `docs/${this.file.name}`;

    inputEl.value = '';
  }

  async saveDocument() {
    if (!this.path || !this.file) {
      return;
    }

    const uploadTask = await this.fireStorage.upload(this.path, this.file);
    const url = await uploadTask.ref.getDownloadURL();
    this.addDocumentForm.controls.document.setValue(url);
  }
}
