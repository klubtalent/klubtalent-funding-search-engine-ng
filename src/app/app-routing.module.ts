import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/* List of available routes */
const routes: Routes = [
    // Overview module
    {path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule)},
    {path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)},
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
