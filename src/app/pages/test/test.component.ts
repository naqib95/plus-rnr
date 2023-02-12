import { Component, HostListener, OnInit } from '@angular/core';
import {
  DisplayGrid,
  Draggable,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridsterItemComponentInterface,
  GridType
} from 'angular-gridster2';



interface Safe extends GridsterConfig {
  draggable: Draggable;
}



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})


export class TestComponent implements OnInit{

  options!: Safe;
  dashboard: Array<GridsterItem> =[
    { cols: 2, rows: 1, y: 0, x: 0 },
    { cols: 2, rows: 2, y: 0, x: 2, hasContent: true, content:`<iframe src="https://play.grafana-zabbix.org/d-solo/000000003/grafana-zabbix-demo?orgId=2&from=1675394210818&to=1675415750818&theme=light&panelId=7" width="100%" height="100%" frameborder="0"></iframe>` },
    { cols: 1, rows: 1, y: 0, x: 4 },
    { cols: 1, rows: 1, y: 2, x: 5 },
    { cols: 1, rows: 1, y: 1, x: 0 },
    { cols: 1, rows: 1, y: 1, x: 0 },
    {
      cols: 2,
      rows: 2,
      y: 3,
      x: 5,
      // minItemRows: 2,
      // minItemCols: 2,
      label: 'Min rows & cols = 2'
    },
    {
      cols: 2,
      rows: 2,
      y: 2,
      x: 0,
      label: 'Max rows & cols = 2'
    },
    {
      cols: 2,
      rows: 1,
      y: 2,
      x: 2,
      dragEnabled: true,
      resizeEnabled: true,
      label: 'Drag&Resize Enabled'
    },
    { cols: 1, rows: 1, y: 2, x: 6 }
  ];


  

  static eventStart(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent
  ): void {
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface,
    event: MouseEvent
  ): void {
    console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(
    source: GridsterItem,
    target: GridsterItem,
    grid: GridsterComponent
  ): void {
    console.log('overlap', source, target, grid);
  }

  ngOnInit(): void {
    this.options = {
      maxCols: 8,
      minCols: 8,
      maxRows: 30,
      minRows: 8,
      gridType: GridType.ScrollVertical,
      displayGrid: DisplayGrid.None,
      pushItems: true,
      swap: true,
      enableBoundaryControl: true,
      disableScrollVertical: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        stop: TestComponent.eventStop,
        start: TestComponent.eventStart,
        dropOverItems: true,
        // dropOverItemsCallback: TestComponent.overlapEvent
      },
      disableWindowResize: false,
      resizable: {
        enabled: true
      },
      api: {
        resize: () => {},
        optionsChanged: () => {},
      }
    };
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }

  // resize() {
  //   if (this.options.api) {
  //     this.options.api.resize;
  //   }
  // }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

 
   
}

  
