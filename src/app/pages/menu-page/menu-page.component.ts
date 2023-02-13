import { Component, HostListener, OnInit, Optional } from '@angular/core';
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
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Safe extends GridsterConfig {
  draggable: Draggable;
}


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit{

  code: any;

  private _jsonURL = '';
  private listJsonURL = '';


  options!: Safe;
  dashboard: Array<GridsterItem> =[];
  listJson: any;
  locationName: any;

  constructor(private router: Router, private appComponent: AppComponent, private route: ActivatedRoute, private http: HttpClient, ) { 
    this.appComponent.sideBarFlag = false;
    this.appComponent.topBarFlag = true;
    this.code = this.route.snapshot.paramMap.get('code');
    this._jsonURL = "../../../assets/json/menu/"+this.code+".json";
    // this.listJsonURL = "../../../assets/json/list.json";
    this.getJSON().subscribe(data => {
      console.log(data)
      this.dashboard = data;
     });
    // this.getListJSON().subscribe(data => {
    //   this.listJson = data[0];
    //   this.locationName = this.listJson[this.code].name
    //   this.appComponent.locationName = this.locationName;
    // });
  
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public getListJSON(): Observable<any> {
    return this.http.get(this.listJsonURL);
  }

  
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
      maxCols: 12,
      minCols: 12,
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
        enabled: false,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        stop: MenuPageComponent.eventStop,
        start: MenuPageComponent.eventStart,
        dropOverItems: true,
      },
      disableWindowResize: false,
      resizable: {
        enabled: false
      },
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

  imageClick(event: any) {
    // this.router.navigate(['/menu-page',{code: event}])
  }

  commentClick(event: any) {
    // this.dialogService.open(ReviewListComponent);
  }

  closeComment() {
    
  }

  revealClick(event: any) {
    console.log(event)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }


}
