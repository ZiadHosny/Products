import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  {
    path: 'product-list/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
