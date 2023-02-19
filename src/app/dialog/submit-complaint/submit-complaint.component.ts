import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ComplaintComponent } from 'src/app/pages/complaint/complaint.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-submit-complaint',
  templateUrl: './submit-complaint.component.html',
  styleUrls: ['./submit-complaint.component.scss']
})
export class SubmitComplaintComponent {

  tenantNgModel="Selera Perak";
  complaintNgModel: any;
  data: any;

  constructor(private dialogRef: NbDialogRef<any>, public complaintComp: ComplaintComponent) {

  }

  submitComplaint() {
    this.data = {"name": this.tenantNgModel, "complaint": this.complaintNgModel, "date": formatDate(Date.now(), 'dd-MM-yyyy', 'en-MY')};
    this.dialogRef.close(this.data)
    this.tenantNgModel = "";
    this.complaintNgModel = "";
    this.data = "";
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
