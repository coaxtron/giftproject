import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';

@Component({
  selector: 'service-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.scss']
})
export class EceComponent implements OnInit {
  order: 1;
  showSpinner: boolean = true;
  ece: Array<ServiceModel> = [];

  constructor(
    public dialog: MatDialog,
    private eceservice: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }
  ngOnInit(): void {
    this.eceservice.geteceList().subscribe((data) => {
      this.ece = data;
      this.showSpinner = false;
    });
  }
}
