import { NgModule } from '@angular/core';
import { ImportModule } from 'src/app/import/import.module';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations:[
    HeaderComponent,
    LoadingComponent

  ],
  imports: [
    ImportModule
],
exports: [
    HeaderComponent,
    LoadingComponent
]

})
export class SharedModule {}
