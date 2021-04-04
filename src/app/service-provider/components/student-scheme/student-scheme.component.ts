import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceListService } from '../../services/service-list.service';
import { FormDetailsComponent } from '../form-details/form-details.component';
import { ServiceModel } from '../../models/service-model';

@Component({
  selector: 'service-student-scheme',
  templateUrl: './student-scheme.component.html',
  styleUrls: ['./student-scheme.component.scss']
})
export class StudentSchemeComponent implements OnInit {
  order = 1;
  showSpinner: boolean = true;
  student_scheme: Array<ServiceModel> = [];
  constructor(
    public dialog: MatDialog,
    private studentService: ServiceListService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormDetailsComponent,{
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    localStorage.getItem('services');
    this.studentService.getStudentScheme().subscribe(
      (data) => {
        console.log(data);
        this.student_scheme = data;
        this.showSpinner = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
