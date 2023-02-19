import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // T1CurrMonthInc: any;
  // T2CurrMonthInc: any;
  tenantNgModel = "Total Tenant";
  flagCode = "All";
  flagCodeTenant = "Total Tenant";
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

  IncMonthlyConsumption2: any;
  TNBCurrMonthInc2: any;
  TNBTotal2: any;
  SyabasCurrMonth2: any;
  SyabasTotal2: any;
  syabasMonthlyConsumption2: any;


  constructor(private appComponent: AppComponent) {
    this.appComponent.sideBarFlag = true;
    this.appComponent.topBarFlag = true;
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
              name: '9.21 MWh',
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
              name: 'RM 5,140.61',
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
              name: '50 m³',
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
              name: 'RM 114.00',
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

    this.TNBCurrMonthInc2 = {
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

    this.TNBTotal2 = {
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

    this.SyabasCurrMonth2 = {
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

    this.SyabasTotal2 = {
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

    this.IncMonthlyConsumption2 = {
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

    this.syabasMonthlyConsumption2 = {
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
    
      this.flagCode = "Gurun (North Bound)";
    
  }

  dropdownChangeTenant(event: any){
    if(event == "Total Tenant") {
      this.flagCodeTenant = "Total Tenant";
      this.tenantNgModel = "Total Tenant";
    }
    else {
      this.flagCodeTenant = "Selera Makan";
      this.tenantNgModel = "Selera Makan";
    }
  }


}
