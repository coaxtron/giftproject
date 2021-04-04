import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'service-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
  }
  subscribeUs() {
    if (this.email.invalid) {
      return this.snackbar.open('Please enter a valid e-mail address', 'OK', {
        duration: 4000, panelClass: ['snakbar-color']
      });
    }
}
}
