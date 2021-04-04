import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicefrontService } from '../../services/servicefront.service';

@Component({
  selector: 'service-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loadingEnable: boolean;
  sidenavEnable = false;
  user: boolean = true;

  @Output()
  sidenav = new EventEmitter();

  menu: any = [];
  constructor(private serviceList: ServicefrontService) {}

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  ngOnInit(): void {
    this.serviceList.getMenu().subscribe((data) => {
      this.menu = data;
    });
  }
  home() {
    document
      .getElementById('home')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  about() {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  service() {
    document
      .getElementById('service')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  team() {
    document
      .getElementById('team')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
  protfolio() {
    document.getElementById('protfolio').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  contact() {
    document
      .getElementById('contact')
      .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
}
