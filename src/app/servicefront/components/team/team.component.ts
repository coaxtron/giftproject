import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'service-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  card = [
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      image: 'https://www.w3schools.com/bootstrap4/img_avatar5.png',
      title:'Name',
      para: 'With supporting text below as a natural lead-in to additional content.',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
