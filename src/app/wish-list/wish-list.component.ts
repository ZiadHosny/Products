import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFormWishListByIndex } from '../store/wish-list.action';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishList: any = [];
  constructor(private store: Store<{ wishList: [] }>) {
    store.select('wishList').subscribe((res) => {
      this.wishList = res;
    });
  }

  ngOnInit(): void {}

  removeItemFromWishList(index: number) {
    this.store.dispatch(removeFormWishListByIndex({ index }));
  }
}
