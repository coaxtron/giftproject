import { Component, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/service-provider/models/service-model';
import { ServiceListService } from 'src/app/service-provider/services/service-list.service';

@Component({
  selector: 'service-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  latest_scheme: Array<ServiceModel> = [];

  constructor(
    private latestScheme: ServiceListService
  ) { }

  ngOnInit(): void {
    this.latestScheme.getLatestGovtScheme().subscribe((data) => {
      this.latest_scheme = data;
    });
  }



}
