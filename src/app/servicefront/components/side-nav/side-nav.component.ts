import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'service-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  panelOpenState = false;
  @Output()
  sidenav = new EventEmitter();
  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor() { }

  ngOnInit(): void {

  }
      home(){
        document.getElementById("home").scrollIntoView({behavior:"smooth",block: "end", inline: "nearest"});
      }
      about(){
        document.getElementById("about").scrollIntoView({behavior:"smooth",block: "end", inline: "nearest"});
      }
      service(){
        document.getElementById("service").scrollIntoView({behavior:"smooth",block: "end", inline: "nearest"});
      }
      team(){
        document.getElementById("team").scrollIntoView({behavior:"smooth",block: "end", inline: "nearest"});
      }
      protfolio(){
        document.getElementById("protfolio").scrollIntoView({behavior:"smooth",block: "start", inline: "nearest"});
      }
      contact(){
        document.getElementById("contact").scrollIntoView({behavior:"smooth",block: "end", inline: "nearest"});
      }

}
