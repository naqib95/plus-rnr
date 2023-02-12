import { Component } from '@angular/core';
import { NbListModule, NbInfiniteListDirective } from '@nebular/theme';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {
  data = [{name:"Naqib", rating: 5, review: "Sedap"},
          {name:"Naqib", rating: 5, review: "Sedap"},
          {name:"Naqib", rating: 5, review: "Sedap"},
          {name:"Naqib", rating: 5, review: "Sedap"},
          {name:"Naqib", rating: 5, review: "Sedap"},
          {name:"Naqib", rating: 5, review: "Sedap"},
        ];
}
