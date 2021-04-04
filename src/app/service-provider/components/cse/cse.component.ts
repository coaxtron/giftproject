import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';

@Component({
  selector: 'service-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.scss']
})
export class CseComponent implements OnInit {
  order: 1;
  showSpinner: boolean = true;
  cse: Array<ServiceModel> = [];

  constructor(
    public dialog: MatDialog,
    private cseservice: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }
  ngOnInit(): void {
    this.cseservice.getcseList().subscribe((data) => {
      this.cse = data;
      this.showSpinner = false;
    });
  }
}
