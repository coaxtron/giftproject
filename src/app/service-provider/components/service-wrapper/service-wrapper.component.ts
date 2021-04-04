import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'service-service-wrapper',
  templateUrl: './service-wrapper.component.html',
  styleUrls: ['./service-wrapper.component.scss'],
})
export class ServiceWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onActivate(event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
