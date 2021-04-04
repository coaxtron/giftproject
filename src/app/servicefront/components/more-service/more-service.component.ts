import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'service-more-service',
  templateUrl: './more-service.component.html',
  styleUrls: ['./more-service.component.scss']
})
export class MoreServiceComponent implements OnInit {

  @Input() icon: string;
  @Input() iconClasses: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
