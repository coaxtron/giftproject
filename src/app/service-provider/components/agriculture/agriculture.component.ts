import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';

@Component({
  selector: 'service-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {
  order: 1;
  showSpinner: boolean = true;
  agriculture: Array<ServiceModel> = [];

  constructor(
    public dialog: MatDialog,
    private agricultureService: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }
  ngOnInit(): void {
    this.agricultureService.getagriculturelist().subscribe((data) => {
      this.agriculture = data;
      this.showSpinner = false;
    });
  }
}
