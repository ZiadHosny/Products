import { createReducer, on } from '@ngrx/store';
import {
  addtoWishList,
  removeFormWishListById,
  removeFormWishListByIndex,
} from './wish-list.action';

export const initialState: any = [];

export const wishListReducer = createReducer(
  initialState,
  on(addtoWishList, (state, { id, img, title }) => {
    let arr = [...state];

    let product = arr.find((e) => {
      return e.id == id;
    });

    if (product) {
      return state;
    } else {
      state = [...state, { id, img, title }];
      return state;
    }
  }),
  on(removeFormWishListById, (state, { id }) => {
    let arr = [...state];

    let index = arr.findIndex((e) => {
      return id == e.id;
    });

    if ((index != -1)) {
      arr.splice(index, 1);
    }
    return arr;
  }),
  on(removeFormWishListByIndex, (state, { index }) => {
    let arr = [...state];

    arr.splice(index, 1);
    return arr;
  })
);
