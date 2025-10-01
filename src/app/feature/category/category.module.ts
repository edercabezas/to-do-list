import { NgModule } from '@angular/core';
import { ImportModule } from 'src/app/import/import.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  declarations:[
    CreateCategoryComponent,
    ListCategoryComponent


  ],
  imports: [
    ImportModule,
    SharedModule,
    CategoryRoutingModule
],

})
export class CategoryModule {}
