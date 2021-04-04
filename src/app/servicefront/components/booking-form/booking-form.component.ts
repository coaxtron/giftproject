import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  NgForm,
} from '@angular/forms';
import { SocialSharingMetaData } from '../models/social-sharing-obj.model';
import { UtilityService } from '../../services/utility.service';
interface service {
  name: string;
  services?: any[];
}
@Component({
  selector: 'service-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  socialDetails: SocialSharingMetaData;
  orderform = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    servicecategories: new FormControl(''),
    categories: new FormControl(''),
  });
  services: service[] = [
    {
      name: 'Home_Appliances',
      services: [
        { name: 'Cooler' },
        { name: 'Geyser' },
        { name: 'Inverter' },
        { name: 'Juicer Mixer' },
        { name: 'Microwave' },
        { name: 'Mixer Grinder' },
        { name: 'Washing Machine' },
        { name: 'Iron' },
        { name: 'Electric Kettle' },
        { name: 'Celling Fan' },
        { name: 'Voltage Stabilizer' },
        { name: 'Induction Cooktop' },
        { name: 'T.V / LCD / LED' },
        { name: 'Fridge' },
        { name: 'Toasters' },
        { name: 'Coffee Machine' },
        { name: 'Electrical Sewing Machine' },
        { name: 'Music System' },
        { name: 'Others' },
      ],
    },
    {
      name: 'Mechanical',
      services: [
        { name: 'Diesel Generators' },
        { name: 'Diesel Pump' },
        { name: 'Bike Repair' },
        { name: 'Others' },
      ],
    },
    { name: 'Lighting', services: [{ name: 'Lighting' }, { name: 'Others' }] },
    {
      name: 'Rental',
      services: [
        { name: 'AC' },
        { name: 'Fridge' },
        { name: 'Cooler' },
        { name: 'Washing Machine' },
        { name: 'Diesel Generator' },
        { name: 'Others' },
      ],
    },
    { name: 'RO', services: [{ name: 'RO' }, { name: 'Others' }] },
    {
      name: 'HVAC',
      services: [
        { name: 'Split Ac' },
        { name: 'Windows Ac' },
        { name: 'Ductable Ac' },
        { name: 'D freezer' },
        { name: 'Water Cooler' },
        { name: 'Chiller Plant' },
        { name: 'Others' },
      ],
    },
    { name: 'Security', services: [{ name: 'CCTV' }, { name: 'Others' }] },
    {
      name: 'Electrical_Hardware',
      services: [
        { name: 'Electrical Panel' },
        { name: 'House Wiring' },
        { name: 'Motor' },
        { name: 'Others' },
      ],
    },
  ];

  order: any;
  get serviceCategory() {
    return this.orderform.get('servicecategories');
  }

  constructor(private fb: FormBuilder, private utility: UtilityService) { }

  whatsAppMobile: string;
  whatsAppDesktop: string;
  isMobileDevice: boolean;

  ngOnInit(): void {
    // console.log(this.services);
    const services = JSON.stringify(this.services);
    localStorage['services'] = services;
    // this.isMobileDevice = this.utilityService.isMobileDevice();
    // this.whatsAppMobile = `https://api.whatsapp.com/send?text=Hi%20there,%20I%20am%20Vikash&phone=+918908780503`;
    // this.whatsAppDesktop = `https://api.whatsapp.com/send?text=Hi%20there,%20I%20am%20Vikash&phone=+918908780503`;

    this.orderform = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      servicecategories: ['', Validators.required],
      categories: ['', Validators.required],
    });
  }

  isNumber(event) {
    return this.utility.numberOnly(event);
  }

  save(orderform: NgForm) {
    // console.log(this.orderform.value);
    const order = JSON.stringify(this.orderform.value);
    localStorage['order'] = order;
    this.socialDetails = this.orderform.value;
    var obj = JSON.stringify(this.socialDetails);
    var jsonObject = eval('(' + obj + ')');

    window.open(
      `https://api.whatsapp.com/send?text=  👨‍💼 Name : ${jsonObject.name} + %0a 📞 Mobile: ${jsonObject.mobile} + %0a ✉️ Address: ${jsonObject.address} + %0a📜 Categories : ${jsonObject.servicecategories.name} + %0a 🛠 Service : ${jsonObject.categories.name}  &phone=+918235503371`
    );
    // console.log(this.socialDetails);
    this.orderform.reset();
  }
}
