import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor() { }

  getCurrentDateTime() {
    return Date.now();
  }

  getDDMMYYYYfromEPOC(value: string | number | Date) {
    const date = new Date(value);
    let d = date.getUTCDate().toString();
    let m = (date.getUTCMonth() + 1).toString();
    const y = date.getUTCFullYear().toString();
    if (d.length === 1) {
      d = '0' + d;
    }
    if (m.length === 1) {
      m = '0' + m;
    }
    return d + '/' + m + '/' + y;
  }

  getDDMMYYYYHHMMfromEPOC(value: string | number | Date) {
    const date = new Date(value);
    let d = date.getUTCDate().toString();
    let m = (date.getUTCMonth() + 1).toString();
    const y = date.getUTCFullYear().toString();
    let hh = date.getHours().toString();
    let mm = date.getMinutes().toString();
    if (d.length === 1) {
      d = '0' + d;
    }
    if (m.length === 1) {
      m = '0' + m;
    }
    if (hh.length === 1) {
      hh = '0' + hh;
    }
    if (mm.length === 1) {
      mm = '0' + mm;
    }
    return d + '/' + m + '/' + y + ' ' + hh + ':' + mm;
  }

  getYear(value: string | number | Date) {
    const date = new Date(value);
    return date.getUTCFullYear().toString();
  }

  getMonth(value: string | number | Date) {
    const date = new Date(value);
    return (date.getUTCMonth() + 1).toString();
  }

  dobDate() {
    return { year: new Date().getFullYear() - 15, month: 12, day: 31 };
  }

  dateToEpoc(value: string) {
    return new Date(value + ' 0:0:00').getTime();
  }

  dateToEpocEOD(value: string) {
      return new Date(value + ' 23:59:59').getTime();
  }
}
