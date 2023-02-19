import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  tenantFlag: any;

  constructor(private appComponent: AppComponent, private router: Router) {
   
    this.appComponent.sideBarFlag = false;
    this.appComponent.topBarFlag = false;

    this.tenantFlag = true;

  }

  notTenant() {
    if(this.tenantFlag == true) {
      this.tenantFlag = false;
    }
    else {
      this.tenantFlag = true;
    }
  }

  login() {
    this.appComponent.adminName = "Selera Makan";
    this.appComponent.adminRole = "Tenant";
    this.router.navigate(['tenant']);
  }

  loginAdmin() {
    this.appComponent.adminName = "admin";
    this.appComponent.adminRole = "admin-PLUS";
    this.router.navigate(['admin']);
  }



}
