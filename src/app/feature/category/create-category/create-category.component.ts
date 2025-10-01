import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud/crud.service';
import { v4 as uuidv4 } from 'uuid';
import type { OverlayEventDetail } from '@ionic/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  standalone: false,
})
export class CreateCategoryComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);
  private _crud: CrudService = inject(CrudService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public formCategory!: FormGroup;
  isAlertOpen = false;
  alertButtons2 = ['Action'];
  categoryID: any;

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

  constructor() {}

  ngOnInit() {
    this.categoryID = this.route.snapshot.paramMap.get('id');
    if (this.categoryID) {
      setTimeout(() => {
        this.getCategoryToOne(this.categoryID);
      }, 1000);
    }

    this.initForm();
  }

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  initForm(): void {
    this.formCategory = this.formBuilder.group({
      id: [''],
      category: ['', [Validators.required]],
      description: [''],
      status: ['', [Validators.required]],
    });
  }

  saveData(): void {
    if (this.formCategory.invalid) {
      this.formCategory.markAllAsTouched();
      return;
    }

    if (this.categoryID) {
      this.updateCategory();
      return;
    }
    this.createCategory();
  }

  createCategory(): void {
    const data: any = {
      id: uuidv4(),
      category: this.formCategory.get('category')?.value,
      description: this.formCategory.get('description')?.value,
      status: this.formCategory.get('status')?.value,
    };

    this._crud
      .create('tbCategory', data)
      .then((response: any) => {
        if (response.status) {
          setTimeout(() => {
            this.isAlertOpen = true;
            this.initForm();
          }, 1000);
        }
      })
      .finally(() => {
        this._crud.read('tbCategory');
      });
  }

  updateCategory(): void {
    const data: any = {
      id: this.categoryID,
      category: this.formCategory.get('category')?.value,
      description: this.formCategory.get('description')?.value,
      status: this.formCategory.get('status')?.value,
    };

    this._crud
      .update('tbCategory', data)
      .then((response: any) => {
        if (response.status) {
          setTimeout(() => {
            this.isAlertOpen = true;
          }, 1000);
        }
      })
      .finally(() => {
        this._crud.read('tbCategory');
      });
  }

  getCategoryToOne(id: any): void {
    this._crud.getById('tbCategory', id).then((resposne: any) => {
      console.log(resposne);
      const data: any = {
        id: resposne.id,
        category: resposne.category,
        description: resposne.description,
        status: resposne.status,
      };
      this.formCategory.setValue(data);
    });
  }

  clearForm(): void {
    this.formCategory.setValue({});
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
