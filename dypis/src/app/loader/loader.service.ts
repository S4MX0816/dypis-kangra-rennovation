import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoaderService {
  isLoading$ = new BehaviorSubject<boolean>(true);
  totalRequests = 0;

  show() {
    this.totalRequests += 1;
    this.isLoading$.next(true);
  }

  hide() {
    if (this.totalRequests > 0) {
      this.totalRequests -= 1;
    }
    if (this.totalRequests < 1) {
      this.isLoading$.next(false);
    }
  }
}
