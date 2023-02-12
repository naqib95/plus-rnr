import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityReportComponent } from './pages/facility-report/facility-report.component';
import { HomeComponent } from './pages/home/home.component';
import { FacilityPerformanceComponent } from './pages/facility-performance/facility-performance.component';
import { AvigilonCctvComponent } from './pages/avigilon-cctv/avigilon-cctv.component';
import { FolderManagerComponent } from './pages/folder-manager/folder-manager.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { TestComponent } from './pages/test/test.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'facility-performance',
    component: FacilityPerformanceComponent,
  },
  {
    path: 'facility-report',
    component: FacilityReportComponent,
  },
  {
    path: 'avigilon-cctv',
    component: AvigilonCctvComponent,
  },
  {
    path: 'folder-manager',
    component: FolderManagerComponent,
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'user-page',
    component: UserPageComponent
  },
  {
    path: 'menu-page',
    component: MenuPageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
