import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { TestComponent } from './pages/test/test.component';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  displayName: any;
  role: any;
  user: any;
  sideBarFlag = false;
  topBarFlag = false;
  locationName = "";

  constructor(
      private sidebarService: NbSidebarService,
      private nbMenuService: NbMenuService,
      private authService: AuthService,
      private testComponent: TestComponent,
      private router: Router
    ) {
      this.title = "PLUS"

      // Comment this out when in Dev mode
      // this.authService.isLoggedIn();

    }

  ngOnInit() {
    
    // this.getUserDetail();

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'profile-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if(title == "Logout"){
          this.authService.logout();
        }
      });

  }

  // Toggle sidebar menu  
  toggle() {
    this.sidebarService.toggle(true);
    window.dispatchEvent(new Event('resize')); // Trigger resize event to resize panel
    return false;
  }

  getUserDetail() {
    this.user = localStorage.getItem('user');
      this.user = JSON.parse(this.user);
      if(this.user){
        this.displayName = this.user.name;
        this.role = this.user.facility_role;
      }
  }

  onClickLogo(){
    this.router.navigate(['/home']);
  }

  // Menu under profile name
  profileItems = [
    { title: 'Logout', icon: 'log-out-outline' }
  ];

  // Sidebar menu items
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Facility Performance',
      icon: 'bar-chart-outline',
      link: '/facility-performance'
    },
    {
      title: 'Data Entry',
      icon: 'edit-outline',
      children: [{
        title: 'Facility Report',
        link: '/facility-report',
        icon: 'file-outline'
      }]
    },
    {
      title: 'Data Storage',
      icon: 'hard-drive-outline',
      children: [{
        title: 'Folder Manager',
        link: '/folder-manager',
        icon: 'folder-outline'
      },
      {
        title: 'Upload',
        link: '/file-upload',
        icon: 'upload-outline'
      }]
    },
    {
      title: 'Avigilon CCTV',
      icon: 'camera-outline',
      link: '/avigilon-cctv'
    }
    // {
    //   title: 'User Management',
    //   icon: 'people-outline',
    //   link: '/user-management'
    // }
  ];
}
