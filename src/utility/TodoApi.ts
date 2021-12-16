import type { ItemType } from '../stores';

export default class TodoApi {
  static async getAll() {
    return JSON.parse(localStorage.getItem('todo-list') || '[]');
  }
  
  static async save(items: ItemType[]) {
    localStorage.setItem('todo-list', JSON.stringify(items));
  }
}

