import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/scrolltop.service';

@Component({
  selector: 'service-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scrollTopService: ScrollTopService) { }

  ngOnInit(): void {
    this.scrollTopService.setScrollTop();
  }

}
