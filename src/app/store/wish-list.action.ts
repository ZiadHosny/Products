import { createAction, props } from '@ngrx/store';

export const addtoWishList = createAction(
  '[WishList] AddtoWishList',
  props<{ id: number; img: string; title: string }>()
);
export const removeFormWishListByIndex = createAction(
  '[WishList] RemoveFormWishListByIndex',
  props<{ index: number }>()
);
export const removeFormWishListById = createAction(
  '[WishList] RemoveFormWishListById',
  props<{ id: number }>()
);
