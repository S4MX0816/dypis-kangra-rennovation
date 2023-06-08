import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  private _galleryUrl = `${environment.firebaseUrl}/gallery.json`;
  gallery: string[][] = [];

  constructor(private http: HttpClient) {}

  getGallery() {
    return this.http.get<string[][]>(this._galleryUrl).pipe(
      tap((gallery) => {
        this.gallery = gallery;
      })
    );
  }
}
