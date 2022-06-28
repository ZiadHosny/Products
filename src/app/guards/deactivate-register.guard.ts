import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';

import { RegisterAppComponent } from '../auth/register-app/register-app.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateRegisterGuard
  implements CanDeactivate<RegisterAppComponent>
{
  canDeactivate(
    component: RegisterAppComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return component.canExit();
  }
}
