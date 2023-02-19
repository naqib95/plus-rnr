import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ComplaintComponent } from '../complaint/complaint.component';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit{

  flagCode = "All";
  flagCodeTenant = "";
  IncomingTotalConsumption: any;
  AvgConsumptionPerDayThisMonth: any;
  
  IncMonthlyConsumption: any;
  TNBCurrMonthInc: any;
  TNBTotal: any;
  SyabasCurrMonth: any;
  SyabasTotal: any;
  syabasMonthlyConsumption: any;

  IncMonthlyConsumption1: any;
  TNBCurrMonthInc1: any;
  TNBTotal1: any;
  SyabasCurrMonth1: any;
  SyabasTotal1: any;
  syabasMonthlyConsumption1: any;

  constructor(private appComponent: AppComponent, private complaintComponent: ComplaintComponent) {

    this.appComponent.adminName = "Selera Makan";
    this.appComponent.adminRole = "Tenant";

    this.appComponent.sideBarFlag = true;
    this.appComponent.topBarFlag = true;

    this.appComponent.admin = false;

  }

  ngOnInit(): void {

    this.TNBCurrMonthInc = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          levels: [{color: ['#FFBF00']}],
          data: [
            {
              name: '1.0 MWh',
              value: 1,
            },
          ]
        }
      ]
    };

    this.TNBTotal = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          levels: [{color: ['#FFBF00']}],
          data: [
            {
              name: 'RM 445.47',
              value: 1,
            },
          ]
        }
      ]
    };

    this.SyabasCurrMonth = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          data: [
            {
              name: '10 m³',
              value: 1,
            },
          ]
        }
      ]
    };

    this.SyabasTotal = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          data: [
            {
              name: 'RM 24.00',
              value: 1,
            },
          ]
        }
      ]
    };

    this.IncMonthlyConsumption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['Month', 'MWh'],
          ['Jan', 1.7],
          ['Feb', 1.3],
          ['Mar', 0.98],
          ['Apr', 0.88],
          ['May', 1.4],
          ['June', 0.9],
          ['July', 0.52],
          ['Aug', 0.64],
          ['Sep', 0.6],
          ['Oct', 1.4],
          ['Nov', 0.6],
          ['De', 1.0]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ 
        type: 'bar' ,
        color: ['#FFBF00']
      }]
    };

    this.syabasMonthlyConsumption = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['Month', 'm³'],
          ['Jan', 53.7],
          ['Feb', 43.3],
          ['Mar', 83.1],
          ['Apr', 86.4],
          ['May', 70.4],
          ['June', 72.4],
          ['July', 81.2],
          ['Aug', 65.6],
          ['Sep', 51.0],
          ['Oct', 72.4],
          ['Nov', 53.4],
          ['De', 50.0]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ 
        type: 'bar' ,
      }]
    };


    this.TNBCurrMonthInc1 = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          levels: [{color: ['#FFBF00']}],
          data: [
            {
              name: '9.21 MWh',
              value: 1,
            },
          ]
        }
      ]
    };

    this.TNBTotal1 = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          levels: [{color: ['#FFBF00']}],
          data: [
            {
              name: 'RM 5,140.61',
              value: 1,
            },
          ]
        }
      ]
    };

    this.SyabasCurrMonth1 = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          data: [
            {
              name: '50 m³',
              value: 1,
            },
          ]
        }
      ]
    };

    this.SyabasTotal1 = {
      series: [
        {
          breadcrumb: false,
          top: 10,
          silent: true,
          height: '100%',
          width: '100%',
          align: 'center',
          roam: false,
          type: 'treemap',
          label: {
            show: true,
            // formatter: '{b}',
            fontSize: 30
          },
          data: [
            {
              name: 'RM 114.00',
              value: 1,
            },
          ]
        }
      ]
    };

    this.IncMonthlyConsumption1 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['Month', 'MWh'],
          ['Jan', 53.7],
          ['Feb', 43.3],
          ['Mar', 83.1],
          ['Apr', 86.4],
          ['May', 70.4],
          ['June', 72.4],
          ['July', 81.2],
          ['Aug', 65.6],
          ['Sep', 51.0],
          ['Oct', 72.4],
          ['Nov', 53.4],
          ['De', 50.0]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ 
        type: 'bar' ,
        color: ['#FFBF00']
      }]
    };

    this.syabasMonthlyConsumption1 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['Month', 'm³'],
          ['Jan', 53.7],
          ['Feb', 43.3],
          ['Mar', 83.1],
          ['Apr', 86.4],
          ['May', 70.4],
          ['June', 72.4],
          ['July', 81.2],
          ['Aug', 65.6],
          ['Sep', 51.0],
          ['Oct', 72.4],
          ['Nov', 53.4],
          ['De', 50.0]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ 
        type: 'bar' ,
      }]
    };

  }

  dropdownChange(event: any){
    if(event == "All") {
      this.flagCode = "All";
    }
    else {
      this.flagCode = "Gurun (North Bound)";
    }
  }

  dropdownChangeTenant(event: any){
    if(event == "Total Tenant") {
      this.flagCodeTenant = "Total Tenant";
    }
    else {
      this.flagCodeTenant = "Selera Makan";
    }
  }


  

}
