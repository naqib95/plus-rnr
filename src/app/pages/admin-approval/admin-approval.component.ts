import { Component, Optional, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AppComponent } from 'src/app/app.component';
import { AddFeeComponent } from 'src/app/dialog/add-fee/add-fee.component';



@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.scss']
})
export class AdminApprovalComponent {

  dtOptions: DataTables.Settings = {};
  objects: any[] = [];
  data: any;
  admin: any;

  constructor(@Optional() private dialogService: NbDialogService, private appComponent: AppComponent) { 

    this.appComponent.sideBarFlag = true;
    this.appComponent.topBarFlag = true;

    this.admin = this.appComponent.admin;
   
  }

  async ngOnInit(): Promise<void> {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100
    };

    this.objects = [
      {"name": "Selera Makan", "status": "Due", "pay": "Commission", "fee": 300},
      {"name": "Selera Makan", "status": "Pending", "pay": "Rent", "fee": 400},
      {"name": "Selera Makan", "status": "Approved", "pay": "TNB", "fee": 1210},
      {"name": "Selera Makan", "status": "Rejected", "pay": "SYABAS", "fee": 40}
  ]

  }

  open() {
      this.dialogService.open(AddFeeComponent).onClose.subscribe((data)=>{
        if(data){
          this.objects.push(data)
        }

      });
  }

  approval(event: any) {
    this.objects[event].status = "Approved";
  }

  reject(event: any) {
    this.objects[event].status = "Rejected";
  }

  submit(event: any) {
    this.objects[event].status = "Submitted";
  }




}
