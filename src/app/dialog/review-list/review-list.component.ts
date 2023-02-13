import { Component } from '@angular/core';
import { NbListModule, NbInfiniteListDirective, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent {
  nameNgModel: any;
  ratingNgModel: any;
  textareaNgModel: any;

  data = [{name:"Azhar", rating: 5.0, review: "Very Nice."},
  {name:"Rahman", rating: 4.0, review: "Decent place. I found the entrees to be very agreeable to my personal flavor-profile. I was happy to see how clean everything was. Everything I tried was bursting with flavor. There were a lot of interesting decorations on the walls. I would have rated this higher, but the wait to get in was so long."},
  {name:"Cahaya", rating: 4.5, review: "This place had a lot of heart. I found the entrees to be very agreeable to my personal flavor-profile. The decor was unique and incredible. The service was good for the most part but the waitress was a bit rude. I would have rated this higher, but my coffee mug was dirty."},
  {name:"Firdaus", rating: 3.5, review: "Sedap. Boleh repeat lagi!"},
  {name:"Nurul", rating: 3.0, review: "I had high hopes for this place. The fish was under-seasoned. The service wasn't that good and the waitress was rude. Overall experience: 3 stars."},
  {name:"Sulaiman", rating: 5.0, review: "Best experience ever! The food was cooked to perfection. I was happy to see how clean everything was. Try out the huge selection of incredible appetizers. Everything was just so yummy. This is definitely a spot I'll be frequenting."},
];

  constructor(private dialogRef: NbDialogRef<any>) {

  }

  submitReview() {
    var ratingArr = {
      name:  this.nameNgModel, rating: this.ratingNgModel, review: this.textareaNgModel
    };
    this.data.unshift(ratingArr);
    this.nameNgModel = "";
    this.ratingNgModel = "";
    this.textareaNgModel = "";
  }

  closeDialog(){
    this.dialogRef.close()
  }



}
