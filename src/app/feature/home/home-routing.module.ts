import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { WelcomeComponent } from '../welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'home',
        component: WelcomeComponent
      },
      {
        path: 'task',
        loadChildren: () => import('../task/task.module').then(m => m.TaskModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then(m => m.CategoryModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
