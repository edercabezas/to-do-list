import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { CrudService } from 'src/app/core/services/crud/crud.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
  standalone: false,
})
export class ListTaskComponent implements OnInit {

  private _crud: CrudService = inject(CrudService);
  private route: NavController = inject(NavController);

  selectedCategory: any;
  reload: boolean = false;
  dataTask: any[] = [];

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

  dataCategory: any[] = [];
  isAlertOpen = false;
  constructor() { }

  ngOnInit() {
    this.reload = true;
    setTimeout(() => {

      this.getTask();
    }, 1000)
  }

  ionViewWillEnter() {
    this.getTask();
  }

  getTask(): void {
    this._crud.read('tbTask').then((response: any) => {
      this.dataTask = response;
      this.filterCategory();
      console.log(response)
      this.getCategories();
    }).finally(() => {
      this.reload = false;
    });

  }

  deleteTask(id: any): void {
    this._crud.delete('tbTask', id).then((response: any) => {
      if (response.status) {
        this.isAlertOpen = true;
      }
    }).finally(() => {
      this.getTask();
    })
  }


  getCategories(): void {
    this._crud.read('tbCategory').then((response: any) => {
      this.dataCategory = response;
    }).finally(() => {
      this.reload = false;
    });
  }

  filterCategory(): any {

    this.dataTask.forEach((item: any) => {
      const match = this.dataCategory.find((category: any) => category.id === item.category);
      item.cate = match ? match.category : 'Desconocida';
    });

    console.log(this.dataTask)
  }

  editTask(id: string) {
    this.route.navigateForward(['/dashboard/task/edit-task/', id]);
  }

  onCategoryChange(data: any) {
    const selectedId = data.detail.value;
    const selectedItem = this.dataCategory.find(item => item.id === selectedId);

    this.dataTask = this.dataTask.filter((task: any) => task.category === selectedItem.id);
  }

  setOpen(status: boolean): void { }
}
