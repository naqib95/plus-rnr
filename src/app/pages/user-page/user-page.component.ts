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
import { ReviewListComponent } from 'src/app/dialog/review-list/review-list.component'
import { NbDialogService } from '@nebular/theme';



interface Safe extends GridsterConfig {
  draggable: Draggable;
}


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{

  location: any;

  private _jsonURL = '';
  private listJsonURL = '';

  options!: Safe;
  dashboard: Array<GridsterItem> =[];
  listJson: any;
  locationName: any;



  constructor(@Optional() private dialogService: NbDialogService, private router: Router, private appComponent: AppComponent, private route: ActivatedRoute, private http: HttpClient, ) { 
    this.appComponent.sideBarFlag = false;
    this.appComponent.topBarFlag = true;
    this.location = this.route.snapshot.paramMap.get('location');
    this._jsonURL = "../../../assets/json/"+this.location+".json";
    this.listJsonURL = "../../../assets/json/list.json";
    this.getJSON().subscribe(data => {
      this.dashboard = data;
     });
    this.getListJSON().subscribe(data => {
      this.listJson = data[0];
      this.locationName = this.listJson[this.location].name
      this.appComponent.locationName = this.locationName;
    });
  
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
        stop: UserPageComponent.eventStop,
        start: UserPageComponent.eventStart,
        dropOverItems: true,
        // dropOverItemsCallback: TestComponent.overlapEvent
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
    console.log(event)
  }

  commentClick(event: any) {
    console.log(event)
    this.dialogService.open(ReviewListComponent);
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

