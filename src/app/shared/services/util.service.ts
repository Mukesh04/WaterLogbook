import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ViewImageComponent } from '../components/view-image/view-image.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    // private modalService: NgbModal,
    private _ds: DataService) { }

  navigate(path: string) {
    const vm = this;
    this.router.navigate([path]);
  }

  getDDMMYYYYfromEPOC(value: any) {
    if (value) {
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
    } else {
      return '';
    }
  }

  success(message: string) {
    const vm = this;
    vm.toastr.success(message);
  }

  error(message: string) {
    const vm = this;
    vm.toastr.error(message);
  }

  warning(message: string) {
    const vm = this;
    vm.toastr.warning(message);
  }

  readDoc(fileInput: any, cb: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const image = fileInput.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // cb(reader.result);
        // console.log(reader.result);
        // cb(e.target.result);
        cb(image);
      };
      reader.readAsDataURL(image);
    } else {
      cb(false);
    }
  }

  // uploadDocAPICall(image: string, cb: any) {
  //   const vm = this;
  //   let fd = new FormData();
  //   fd.append('file', image);
  //   // const req = {file: image}
  //   vm._ds.postData('/api/document/upload', fd).subscribe(res => {
  //     if (res && !res.error) {
  //       cb(res.data);
  //     } else {
  //       cb(false);
  //     }
  //   });
  // }

  // fetchAndViewDoc(mongoId: any, multipleDocs: boolean): void {
  //   // fetch API call to be written here
  //   const vm = this;
  //   if (multipleDocs) {
  //     const doc = [];
  //     mongoId.forEach(element => {
  //       doc.push(sessionStorage.getItem(element));
  //     });
  //     const modalRef = vm.modalService.open(ViewImageComponent, { backdrop: 'static', size: 'lg' });
  //     modalRef.componentInstance.docs = doc;
  //   } else {
  //     vm._ds.getData('/api/document/fetch/' + mongoId).subscribe(res => {
  //       console.log(res);
  //       const modalRef = vm.modalService.open(ViewImageComponent, { backdrop: 'static', size: 'lg' });
  //       modalRef.componentInstance.doc = 'data:' + res.data.file.mimetype + ';base64,' + res.data.file.data;
  //     });
  //   }
  // }

  // viewDoc(res: any) {
  //   const vm = this;
  //   const modalRef = vm.modalService.open(ViewImageComponent, { backdrop: 'static', size: 'lg' });
  //   modalRef.componentInstance.doc = res;
  // }

  // fetchDoc(mongoId: any, cb: any): void {
  //   // fetch API call to be written here
  //   const vm = this;
  //   vm._ds.getData('/api/document/fetch/' + mongoId).subscribe(res => {
  //     if (res && res.data && res.data.file && res.data.file.data) {
  //       // cb('data:' + res.data.file.mimetype + ';base64,' + res.data.file.data);
  //       cb('data:image/jpeg;base64,' + res.data.file.data);
  //     } else {
  //       cb('');
  //     }
  //   });
  // }

  // deleteDoc(mongoId: any, multipleDocs: boolean): boolean {
  //   const vm = this;
  //   if (multipleDocs) {
  //     mongoId.forEach(element => {
  //       sessionStorage.removeItem(element);
  //     });
  //   } else {
  //     vm._ds.getData('/api/document/delete/' + mongoId).subscribe(res => {
  //       console.log(res);
  //     });
  //   }
  //   return true;
  // }

  // getMinFormat(value) {
  //   return { year: new Date(value).getFullYear(), month: new Date(value).getMonth() + 1, day: new Date(value).getDate() };
  // }
}
