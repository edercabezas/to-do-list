import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
import { CrudService } from 'src/app/core/services/crud/crud.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  standalone: false,
})
export class CreateTaskComponent implements OnInit {


  formBuilder: FormBuilder = inject(FormBuilder);
  private _crud: CrudService = inject(CrudService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public formTask!: FormGroup;
  public categoryData: any[] = [];
  taskID!: any;

  isAlertOpen = false;
  alertButtons2 = ['Action'];

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.saveData();
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }



  constructor() { }

  ngOnInit() {

    this.taskID = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', this.taskID);
    if (this.taskID) {

      setTimeout(() => {
        this.getTaskToOne(this.taskID);
      }, 1000)
    }


    setTimeout(() => {
      this.getCategory();
    }, 1000)

    this.initForm();
  }


  initForm(): void {
    this.formTask = this.formBuilder.group({
      id: [''],
      task: ['', [Validators.required]],
      description: [''],
      status: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  saveData(): void {

    if (this.taskID) {
      this.updateTask();
      return;
    }
    this.createTask()

  }

  createTask(): void {
    if (this.formTask.invalid) {
      this.formTask.markAllAsTouched();
      return;
    }

    const data: any = {
      id: uuidv4(),
      category: this.formTask.get('category')?.value,
      description: this.formTask.get('description')?.value,
      status: this.formTask.get('status')?.value,
      task: this.formTask.get('task')?.value,

    }

    this._crud.create('tbTask', data).then((response: any) => {

      if (response.status) {
        setTimeout(() => {
          this.isAlertOpen = true;
          this.initForm();
        }, 1000)

      }

    }).finally(() => {
      this._crud.read('tbTask');
    });

  }
  updateTask(): void {
    const data: any = {
      id: this.taskID,
      category: this.formTask.get('category')?.value,
      description: this.formTask.get('description')?.value,
      status: this.formTask.get('status')?.value,
      task: this.formTask.get('task')?.value,

    };
    this._crud.update('tbTask', data).then((response: any) => {
      if (response.status) {
        setTimeout(() => {
          this.isAlertOpen = true;
        }, 1000)

      }
    })
  }


  clearForm(): void {
    this.formTask.setValue({})
  }

  getCategory(): void {
    this._crud.read('tbCategory').then((resposne: any) => {
      console.log(resposne)
      this.categoryData = resposne;
    });
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


  getTaskToOne(id: string): void {
    this._crud.getById('tbTask', id).then((resposne: any) => {
      console.log(resposne);
      const data: any = {
        id: resposne.id,
        category: resposne.category,
        description: resposne.description,
        status: resposne.status,
        task: resposne.task
      };
      this.formTask.setValue(data);
    });
  }
}
