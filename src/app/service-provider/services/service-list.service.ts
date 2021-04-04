import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ServiceModel } from '../models/service-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceListService {
  constructor(private httpClient: HttpClient) {}

  getElectricallist(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/eee.json').pipe(
      map((data) => {
        const electricalArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            electricalArray.push(data[id]);
          }
        }
        return electricalArray;
      })
    );
  }

  getStudentScheme(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/student-scheme.json').pipe(
      map((data) => {
        const studentArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            studentArray.push(data[id]);
          }
        }
        return studentArray;
      })
    );
  }

  getFarmerScheme(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/farmer-scheme.json').pipe(
      map((data) => {
        const homeArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            homeArray.push(data[id]);
          }
        }
        return homeArray;
      })
    );
  }


  getMechanicallist(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/mechanical.json').pipe(
      map((data) => {
        const mechanicalArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            mechanicalArray.push(data[id]);
          }
        }
        return mechanicalArray;
      })
    );
  }


  getCivilList(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/civil.json').pipe(
      map((data) => {
        const civilArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            civilArray.push(data[id]);
          }
        }
        return civilArray;
      })
    );
  }

  getagriculturelist(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/agriculture.json').pipe(
      map((data) => {
        const agricultureArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            agricultureArray.push(data[id]);
          }
        }
        return agricultureArray;
      })
    );
  }

  getcseList(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/cse.json').pipe(
      map((data) => {
        const cseArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            cseArray.push(data[id]);
          }
        }
        return cseArray;
      })
    );
  }

  geteceList(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/ece.json').pipe(
      map((data) => {
        const cseArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            cseArray.push(data[id]);
          }
        }
        return cseArray;
      })
    );
  }



  getLatestGovtScheme(): Observable<ServiceModel[]> {
    return this.httpClient.get('assets/json/latest-govt-scheme.json').pipe(
      map((data) => {
        const latestArray: Array<ServiceModel> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            latestArray.push(data[id]);
          }
        }
        return latestArray;
      })
    );
  }
}
