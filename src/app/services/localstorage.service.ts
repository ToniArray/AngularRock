import { Injectable } from '@angular/core';
import { Band } from 'src/app/interfaces/bandInterface';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setData(name, data): void {
    localStorage.setItem(name, JSON.stringify(data))
  }

  getData(name): Band[] {
    return JSON.parse(localStorage.getItem(name))
  }
}
