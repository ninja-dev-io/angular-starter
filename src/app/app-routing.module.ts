import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {path: '', redirectTo: '/feature', pathMatch: 'full'},
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature-routed.module').then(mod => mod.FeatureRoutedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
