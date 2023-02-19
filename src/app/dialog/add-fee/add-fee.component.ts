import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AdminApprovalComponent } from 'src/app/pages/admin-approval/admin-approval.component';

@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.scss']
})
export class AddFeeComponent {
  tenantNgModel = "";
  payNgModel = "";
  feeNgModel = "";
  data: any;

  constructor(private dialogRef: NbDialogRef<any>, public adminApprovalComponent :AdminApprovalComponent) {

  }

  submitFee() {
    this.data = {"name": this.tenantNgModel, "status": "Due", "pay": this.payNgModel, "fee": this.feeNgModel};
    this.dialogRef.close(this.data)
    this.tenantNgModel = "";
    this.payNgModel = "";
    this.feeNgModel = "";
    this.data = "";
   

  }

  closeDialog(){
    this.dialogRef.close()
  }


}
