import {Routes} from '@angular/router'
export const APP_ROUTES_PROVIDERS: Routes = [
  { path: '',   redirectTo: '/students', pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];
