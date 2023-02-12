import { Component } from '@angular/core';
import { NbSortDirection } from '@nebular/theme';
import { HttpService } from 'src/app/services/http.service';

interface TreeNode<T> {
  data: T;
}

interface FSEntry {
  facility: string;
  jan: boolean;
  feb: boolean;
  mar: boolean;
  apr: boolean;
  may: boolean;
  jun: boolean;
  jul: boolean;
  aug: boolean;
  sept: boolean;
  oct: boolean;
  nov: boolean;
  dec: boolean;
}

@Component({
  selector: 'app-facility-performance',
  templateUrl: './facility-performance.component.html',
  styleUrls: ['./facility-performance.component.scss']
})
export class FacilityPerformanceComponent {

  facilityList: any;

  allColumns = [ 'facility', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec' ];

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private httpService: HttpService) {
    
    this.httpService.getData("https://sso.klccuhibcc.com/api/v1/facility").subscribe((data: any)=>{
      if(data.status_code == "200") {
        this.facilityList = data.data;
      }
    });
 
  }

  data: TreeNode<FSEntry>[] = [
    {
      data: {  facility: 'BANGUNAN MITI', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'INSTEP', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'KOMPLEKS DAYABUMI', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: false, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'MENARA 3 PETRONAS', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'MENARA EXXONMOBIL', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'PETRONAS LEADERSHIP CENTRE', jan: true, feb: true, mar: true, apr: true, may: true, jun: false, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'PETRONAS RESEARCH SDN BHD', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'PETRONAS TWIN TOWERS 1', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: false, oct: true, nov: true, dec: true },
    },
    {
      data: {  facility: 'PETRONAS TWIN TOWERS 2', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sept: true, oct: true, nov: false, dec: false },
    }
  ];

}
