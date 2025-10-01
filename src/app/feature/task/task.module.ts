import { NgModule } from '@angular/core';
import { ImportModule } from 'src/app/import/import.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskRoutingModule } from './task-routing.module';


@NgModule({
  declarations:[
    CreateTaskComponent,
    ListTaskComponent


  ],
  imports: [
    ImportModule,
    SharedModule,
    TaskRoutingModule
],

})
export class TaskModule {}
