import { BehaviorSubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doc } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DocsService {
  private _documentsUrl = `${environment.firebaseUrl}/docs.json`;
  docs$ = new BehaviorSubject<Doc[]>([]);

  constructor(private http: HttpClient) {}

  getDocs() {
    return this.http.get<Doc[]>(this._documentsUrl).pipe(tap(this.patchDocs));
  }

  updateDocs(doc: Doc) {
    const updatedDocs = this.docs$.value;
    updatedDocs.push(doc);
    this.docs$.next(updatedDocs);

    return this.http
      .put<Doc[]>(this._documentsUrl, this.docs$.value)
      .pipe(tap(this.patchDocs))
      .subscribe();
  }

  // Arrow function here because of this undefined issue as it is called internally by tap function
  // Alternatively an AutoBind this key decorator can be created
  private patchDocs = (docs: Doc[]) => {
    this.docs$.next(docs);
  };
}
