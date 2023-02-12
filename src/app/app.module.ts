import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgForOf} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbActionsModule, NbUserModule, NbStepperModule, NbButtonModule, NbSelectModule, NbOptionModule, NbInputModule, NbTreeGridModule, NbContextMenuModule, NbDialogModule, NbCalendarModule, NbBadgeModule, NbDatepickerModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './pages/home/home.component';
import { FacilityReportComponent } from './pages/facility-report/facility-report.component';
// import { UserManagementComponent } from './pages/user-management/user-management.component';
import { FacilityPerformanceComponent } from './pages/facility-performance/facility-performance.component';
import { AvigilonCctvComponent } from './pages/avigilon-cctv/avigilon-cctv.component';
import { DataTablesModule } from 'angular-datatables';
import { KpsocDialogComponent } from './dialog/kpsoc-dialog/kpsoc-dialog.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { FolderManagerComponent } from './pages/folder-manager/folder-manager.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TestComponent } from './pages/test/test.component';
import { ResizableModule } from 'angular-resizable-element';
import { GridsterModule } from 'angular-gridster2';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ReviewListComponent } from './dialog/review-list/review-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityReportComponent,
    FacilityPerformanceComponent,
    AvigilonCctvComponent,
    KpsocDialogComponent,
    FolderManagerComponent,
    FileUploadComponent,
    TestComponent,
    UserPageComponent,
    MenuPageComponent,
    ReviewListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    // Nebular Modules
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbStepperModule,
    NbButtonModule,
    NbSelectModule,
    NbOptionModule,
    NbInputModule,
    NbTreeGridModule,
    NbContextMenuModule,
    NbDialogModule.forRoot(),
    NbCalendarModule,
    NbTreeGridModule,
    NbBadgeModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbListModule, 


    // Resizable Module
    ResizableModule,

    // Drag and Drop Module
    GridsterModule,

    // Angular Datatable Module
    DataTablesModule,

    // Echarts Module
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),

    // KTDGrid Module
    KtdGridModule,

  ],
  entryComponents: [
    
    KpsocDialogComponent,
    AvigilonCctvComponent,
    ReviewListComponent
    
  ],
  providers: [
    AuthService,
    TestComponent
    // { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
