import { Component, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { formatDate } from '@angular/common';
import { SubmitComplaintComponent } from 'src/app/dialog/submit-complaint/submit-complaint.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent {

  dtOptions: DataTables.Settings = {};
  objects: any[] = [];
  data: any;
  tenantFlag : any;
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
      {"name": "Selera Makan", "complaint": "Lampu depan kedai rosak.", "date": "13-2-2023"},
      {"name": "Selera Makan", "complaint": "Kerusi patah.", "date": "10-1-2023"},
      {"name": "Selera Makan", "complaint": "Air dari sinki tidak kuat.", "date": "5-1-2023"},

    ]

    // console.log(formatDate(Date.now(), 'dd-MM-yyyy', 'en-MY'))


  }

  open() {
    this.dialogService.open(SubmitComplaintComponent).onClose.subscribe((data)=>{
      this.objects.push(data)
    });
  }



}
