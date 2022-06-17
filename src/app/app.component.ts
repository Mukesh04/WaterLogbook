import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Water Logbook';
  isSpinner = false;
  
  constructor(private appService: AppService, private swUpdate: SwUpdate) {}

  ngOnInit() {
    const vm = this;
    if (vm.swUpdate.isEnabled) {
      vm.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
    vm.appService.isSpinnerUpdated$.subscribe(value => {
      vm.isSpinner = value;
    });
  }
}
