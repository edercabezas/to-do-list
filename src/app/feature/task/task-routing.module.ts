import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';


const routes: Routes = [
  {
    path: '',
    component: ListTaskComponent,
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
  },
  {
    path: 'edit-task/:id',
    component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
