import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonTitle } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonAlert, IonicModule, IonMenu } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonTitle,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    IonTitle,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonAlert,
    IonMenu
  ]
})
export class ImportModule {}
