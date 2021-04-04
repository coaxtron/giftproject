import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'service-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  formValue: any;
  servicesData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get('assets/json/our-service.json').subscribe((data) => {
      this.servicesData = data;
    });
  }
}
