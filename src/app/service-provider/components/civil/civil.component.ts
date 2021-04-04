import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';

@Component({
  selector: 'service-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.scss']
})
export class CivilComponent implements OnInit {
  order: 1;
  showSpinner: boolean = true;
  civil: Array<ServiceModel> = [];

  constructor(
    public dialog: MatDialog,
    private civilservice: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }
  ngOnInit(): void {
    this.civilservice.getCivilList().subscribe((data) => {
      this.civil = data;
      this.showSpinner = false;
    });
  }
}
