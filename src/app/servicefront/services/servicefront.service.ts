import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicefrontService {
  constructor(private httpClient: HttpClient) {}

  getMenu() {
    return this.httpClient.get('assets/json/menu.json').pipe(
      map((data) => {
        const menuArray: Array<any> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            menuArray.push(data[id]);
          }
        }
        return menuArray;
      })
    );
  }

  getServicetap() {
    this.httpClient.get('assets/json/our-service.json').pipe(
      map((data) => {
        const servicetapArray: Array<any> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            servicetapArray.push(data[id]);
          }
        }
        return servicetapArray;
      })
    );
  }
}
