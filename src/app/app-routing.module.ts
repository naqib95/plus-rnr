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
import { AdminComponent } from './pages/admin/admin.component';
import { AdminApprovalComponent } from './pages/admin-approval/admin-approval.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { TenantComponent } from './pages/tenant/tenant.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes: Routes = [
  {
  path: '',
  component: AdminComponent,
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
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-approval',
    component: AdminApprovalComponent
  },
  {
    path: 'complaint',
    component: ComplaintComponent
  },
  {
    path: 'tenant',
    component: TenantComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
