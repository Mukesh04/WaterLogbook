import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverUrl = environment.apiEndPoint;

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  getData(endPoint: string): any {
    const vm = this;
    setTimeout(function () { vm.appService.spinnerData = true; }, 0);
    return vm.http.get(vm.serverUrl + endPoint).pipe(
      retry(0),
      map(res => {
        setTimeout(function () { vm.appService.spinnerData = false; }, 0);
        return res;
      }),
      catchError(err => {
        return vm.handleError(err, vm);
      }));
  }

  postData(endPoint: string, data: any): any {
    const vm = this;
    setTimeout(function () { vm.appService.spinnerData = true; }, 0);
    return vm.http.post(vm.serverUrl + endPoint, data).pipe(
      retry(0),
      map(res => {
        setTimeout(function () { vm.appService.spinnerData = false; }, 0);
        return res;
      }),
      catchError(err => {
        return vm.handleError(err, vm);
      }));
  }

  handleError(error: HttpErrorResponse, vm: any): any {
    let errorMessage = 'Unknown error!';
    setTimeout(function () { vm.appService.spinnerData = false; }, 0);
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
