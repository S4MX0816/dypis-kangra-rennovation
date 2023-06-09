import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Footer } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FooterService {
  private _footerUrl = `${environment.firebaseUrl}/footer.json`;

  constructor(private http: HttpClient) {}

  getFooterData() {
    return this.http.get<Footer[]>(this._footerUrl);
  }
}
