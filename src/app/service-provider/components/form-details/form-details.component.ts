import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { SocialSharingMetaData } from 'src/app/servicefront/components/models/social-sharing-obj.model';
import { UtilityService } from 'src/app/servicefront/services/utility.service';

@Component({
  selector: 'service-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss'],
})
export class FormDetailsComponent implements OnInit {
  categories: string;
  service: string;
  socialDetails: SocialSharingMetaData;
  orderform = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    servicecategories: new FormControl(''),
    categories: new FormControl(''),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private utility: UtilityService
  ) { }

  ngOnInit(): void {
    this.orderform = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      servicecategories: ['', Validators.required],
      categories: ['', Validators.required],
    });
    this.categories = this.data.service;
    this.service = this.data.title;
  }
  isNumber(event) {
    return this.utility.numberOnly(event);
  }

  save(orderform: NgForm) {
    const order = JSON.stringify(this.orderform.value);
    localStorage['order'] = order;
    this.socialDetails = this.orderform.value;
    var obj = JSON.stringify(this.socialDetails);
    var jsonObject = eval('(' + obj + ')');

    window.open(
      `https://api.whatsapp.com/send?text=  👨‍💼 Name : ${jsonObject.name} + %0a 📞 Mobile: ${jsonObject.mobile} + %0a ✉️ Address: ${jsonObject.address} + %0a📜 Categories : ${jsonObject.servicecategories} + %0a 🛠 Service : ${jsonObject.categories}  &phone=+918235503371`
    );
    this.orderform.reset();
  }
}
