import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CrudService } from 'src/app/core/services/crud/crud.service';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  standalone: false
})
export class ListCategoryComponent implements OnInit {

  private _crud: CrudService = inject(CrudService);
  private route:  NavController = inject( NavController);

  public reload: boolean = false;
  dataCategory: any[] = [];
  isAlertOpen = false;

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }


  constructor() {
  }


  ngOnInit() {
    this.reload = true;
    setTimeout(() => {
      this.getCategories();
    }, 1000)
  }

  ionViewWillEnter() {
    this.getCategories();
  }

  getCategories(): void {
    this._crud.read('tbCategory').then((response: any) => {
      this.dataCategory = response;
    }).finally(() => {
      this.reload = false;
    });
  }


  deleteCategory(id: string): void {
    this._crud.delete('tbCategory', id).then((response: any) => {
      if (response.status) {
        this.isAlertOpen = true;
      }
    }).finally(() => {
      this.getCategories();
    })
  }

  confirmDelete(): void {}

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  editCategory(id: string) {
    this.route.navigateForward(['/dashboard/category/edit-category/', id]);
  }

}
