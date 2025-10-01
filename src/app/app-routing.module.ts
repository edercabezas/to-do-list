import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./feature/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./feature/category/category-routing.module').then( m => m.CategoryRoutingModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./feature/task/task-routing.module').then( m => m.TaskRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
