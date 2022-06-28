import { InterceptorService } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
//Pips
import { PricePipe } from './price.pipe';
import { AuthModule } from './auth/auth.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { wishListReducer } from './store/wish-list.reducer';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    PricePipe,
    ProductDetailsComponent,
    NotfoundComponent,
    CartComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,

    StoreModule.forRoot({ wishList: wishListReducer }),
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
