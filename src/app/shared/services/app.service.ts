import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  user: any;
  private isSpinner: Subject<boolean> = new Subject<boolean>();
  isSpinnerUpdated$ = this.isSpinner.asObservable();

  constructor(private router: Router) { }

  set spinnerData(value: boolean) {
    this.isSpinner.next(value);
  }

  // getUser() {
  //   return this.user ? this.user : JSON.parse(sessionStorage.getItem('user'));
  // }

  setUser(data: any) {
    this.user = data;
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
