import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormDetailsComponent } from '../form-details/form-details.component';
import { ServiceModel } from '../../models/service-model';
import { ServiceListService } from '../../services/service-list.service';

@Component({
  selector: 'service-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent implements OnInit {
  alt: boolean;
  order = 1;
  // data: any;
  showSpinner: boolean = true;

  farmer_scheme: Array<ServiceModel> = [];
  constructor(
    public dialog: MatDialog,
    private farmer: ServiceListService
  ) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '400px',
      data,
    });
  }

  ngOnInit(): void {
    this.farmer.getFarmerScheme().subscribe((data) => {
      this.farmer_scheme = data;
      this.showSpinner = false;
    });
  }
}

