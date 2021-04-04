import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';

@Component({
  selector: 'service-eee',
  templateUrl: './eee.component.html',
  styleUrls: ['./eee.component.scss']
})
export class EeeComponent implements OnInit {

  order = 1;
  showSpinner: boolean = true;
  electrical_hardware: Array<ServiceModel> = [];
  constructor(
    public dialog: MatDialog,
    private electricalService: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }

  ngOnInit(): void {
    localStorage.getItem('services');
    this.electricalService.getElectricallist().subscribe(
      (data) => {
        console.log(data);
        this.electrical_hardware = data;
        this.showSpinner = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
