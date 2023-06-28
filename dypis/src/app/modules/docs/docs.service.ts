import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doc } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private _documentsUrl = `${environment.firebaseUrl}/docs.json`;
  docs: Doc[] = [];

  constructor(private http: HttpClient) {}

  getDocs() {
    return this.http.get<Doc[]>(this._documentsUrl).pipe(
      tap((docs) => {
        this.docs = docs;
      })
    );
  }
}
