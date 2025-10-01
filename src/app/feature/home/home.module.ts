import { NgModule } from '@angular/core';
import { ImportModule } from 'src/app/import/import.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations:[
    TabsComponent

  ],
  imports: [
    ImportModule,
    SharedModule,
    HomeRoutingModule

],

})
export class HomeModule {}
