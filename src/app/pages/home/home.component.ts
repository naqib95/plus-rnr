import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 

  constructor(private router: Router, private appComponent: AppComponent) { 
    this.appComponent.sideBarFlag = false;
    this.appComponent.topBarFlag = false;
  }
  
  ngOnInit(): void {

   

  }

  dropdownChange(event: any) {
    this.router.navigate(['user-page',{location:event}])
  }


}
