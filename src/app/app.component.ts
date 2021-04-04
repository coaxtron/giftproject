import { Component, ViewChild, HostListener, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  update: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, updates: SwUpdate) {
    updates.available.subscribe(event => {

      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());

    })
  }
  title = 'servicebhaiya';
  @ViewChild('drawer', { static: false }) drawer: MatSidenav;

  windowScrolled: boolean;

  toggelNavbar() {
    this.drawer.toggle();
  }
  @HostListener("window:scroll", [])
  // tslint:disable-next-line: typedef
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  // tslint:disable-next-line: typedef
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  // ngOnInit() {}
}
