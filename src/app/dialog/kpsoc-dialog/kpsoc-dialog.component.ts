import { Component, Input, OnInit } from '@angular/core';
import { OssService } from 'src/app/services/oss.service';

@Component({
  selector: 'app-kpsoc-dialog',
  templateUrl: './kpsoc-dialog.component.html',
  styleUrls: ['./kpsoc-dialog.component.scss']
})
export class KpsocDialogComponent implements OnInit{
  @Input() url: any;
  image: any;

  constructor(private ossService: OssService) {
    
  }

  ngOnInit(): void {

  }

}
