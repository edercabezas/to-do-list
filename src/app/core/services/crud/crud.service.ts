import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _storage: Storage | null = null;



  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Crear
  async create(colection: any, data: any): Promise<any> {
    const items = await this.read(colection);
    items.push(data);

    try {

      await this._storage?.set(colection, items);

      return {
        status: true,
        message: 'Registro guardado exitosamente'
      }

    } catch (error) {
      return {
        status: false,
        message: 'Error al guardar los registro valide que la información este bien diligenciada'
      }
    }


  }

  // Leer
  async read(colection: string): Promise<any[]> {
    const data = await this._storage?.get(colection);
    return data || [];
  }

  // Actualizar
  async update(colection: any, data: any): Promise<any> {
    const items = await this.read(colection);
    const index = items.findIndex(c => c.id === data.id);
    if (index !== -1) {
      items[index] = data;
    try {
      await this._storage?.set(colection, items);

      return {
        status: true,
        message: 'Registro guardado exitosamente'
      }

    } catch (error) {
      return {
        status: false,
        message: 'Error al eliminar el registro valide nuevamente'
      }
    }

      
    }
  }

  // Eliminar
  async delete(colection: any, id: string): Promise<any> {
    let items = await this.read(colection);
    items = items.filter(c => c.id !== id);
    
    try {

      await this._storage?.set(colection, items);

      return {
        status: true,
        message: 'Registro eliminado exitosamente'
      }

    } catch (error) {
      return {
        status: false,
        message: 'Error al eliminar el registro valide nuevamente'
      }
    }
  }

  // Obtener por ID
  async getById(colection: any, id: string): Promise<any> {
    const items = await this.read(colection);
    return items.find(c => c.id === id);
  }
}

