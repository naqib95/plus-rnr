import { formatDate } from '@angular/common';
import { Component, OnInit, Optional } from '@angular/core';
import { NbDialogService, NbBadgeComponent } from '@nebular/theme';
import { KpsocDialogComponent } from 'src/app/dialog/kpsoc-dialog/kpsoc-dialog.component';
import { OssService } from 'src/app/services/oss.service';

@Component({
  selector: 'app-kpsoc',
  templateUrl: './avigilon-cctv.component.html',
  styleUrls: ['./avigilon-cctv.component.scss']
})



export class AvigilonCctvComponent implements OnInit{
  
  dtOptions: DataTables.Settings = {};
  objects: any[] = [];
  marker: string = '';
  maxKeys: number = 100;
  noMoreObjects: boolean = false;
  totalObjects: any;
  nextMarker: any = "";
  dataDone: boolean = false;
  prefixFilter: any = "";
  currentDate: any;
  dateModel: any;
  filterFn: any;
  uniqueDevice: any[] = [];
  selectedDevice: any = "";



  constructor(@Optional() private dialogService: NbDialogService, private ossService: OssService) { 
   
  }

  async ngOnInit(): Promise<void> {
    
    await this.getCurrentDate();

    await this.ossService.listObjects('images/'+this.prefixFilter+'/').then((response) => {
      this.totalObjects = response;
    });
    await this.loadTable(this.prefixFilter,this.selectedDevice);
  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100
    };

  }


  open(name: any) {
    this.ossService.getUrl(name).then((data)=>{
      this.dialogService.open(KpsocDialogComponent,{context:{url:data}});
    });
    
  }

  async loadTable(prefixFilter:string,device:string) {
    while(!this.noMoreObjects) {
        await this.ossService.listObjectsPagination('images/'+prefixFilter+'/'+device, this.marker, this.maxKeys).then((response) => {
          this.objects.push(...response.objects);
          this.marker = response.nextMarker;
          this.noMoreObjects = !response.isTruncated;
        }); 
    }

    // Populate dropdown filter with unique device name
    for(let i = 0; i < this.objects.length; i++){
      var devices = ((((this.objects[i].name).split("."))[0]).split("/"))[2];
      this.uniqueDevice.push(devices);
    }
    this.uniqueDevice = [...new Set(this.uniqueDevice)];
    this.dataDone = true;
  }

  async getCurrentDate() {
    this.currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    this.dateModel = this.currentDate.toLocaleDateString('en-us', options);
    this.currentDate = formatDate(this.currentDate, 'yyyyMMdd', 'en-MY');
    this.prefixFilter = this.currentDate;
  }

  async selectDate(event:any){
    this.clearFlags();
    this.prefixFilter = formatDate(event, 'yyyyMMdd', 'en-MY');
    await this.loadTable(this.prefixFilter,this.selectedDevice);
  }

  async dropdownChange(event: any){
    this.selectedDevice = event;
    if(this.selectedDevice == "All"){
      this.selectedDevice = "";
    }
    else {
      this.selectedDevice = this.selectedDevice + ".";
    }
    this.clearFlags();
    await this.loadTable(this.prefixFilter,this.selectedDevice);
  }

  clearFlags(){
    this.objects = [];
    this.marker = "";
    this.noMoreObjects = false;
    this.dataDone = false;
  }

  dateFormat(data: any){
    var date = (data.split(" "))[0];
    var time = (data.split(" "))[1]; // 00h00m00s
    var nightDay = (data.split(" "))[2]; // AM/PM
    var timeZone = (data.split(" "))[3]; // (SGT)
    var newTime = time.replace("h",":");
    newTime = newTime.replace("m",":");
    newTime = newTime.replace("s","");
    var newDate = formatDate(date, 'dd-MM-yyyy', 'en-MY')
    return newDate + " " + newTime + " " + nightDay + " " + timeZone;
  }
 

}
