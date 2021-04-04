import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';
import { ServiceModel } from '../../models/service-model';

@Component({
  selector: 'service-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.scss'],
})
export class MechanicalComponent implements OnInit {
  order: 1;
  showSpinner: boolean = true;
  mechanical: Array<ServiceModel> = [];

  constructor(
    public dialog: MatDialog,
    private mechanicalService: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }
  ngOnInit(): void {
    this.mechanicalService.getMechanicallist().subscribe((data) => {
      this.mechanical = data;
      this.showSpinner = false;
    });
  }
}
