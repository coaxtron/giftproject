
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWrapperComponent } from './components/service-wrapper/service-wrapper.component';
import { from } from 'rxjs';
import { MechanicalComponent } from './components/mechanical/mechanical.component';
import { MoreServiceComponent } from '../servicefront/components/more-service/more-service.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { StudentSchemeComponent } from './components/student-scheme/student-scheme.component';
import { EeeComponent } from './components/eee/eee.component';
import { CivilComponent } from './components/civil/civil.component';
import { AgricultureComponent } from './components/agriculture/agriculture.component';
import { CseComponent } from './components/cse/cse.component';
import { EceComponent } from './components/ece/ece.component';

const routes: Routes = [
  {
    path: 'service',
    component: ServiceWrapperComponent,
    children: [
      {
        path: 'farmer',
        component: FarmerComponent,
      },
      {
        path: 'Mechanical',
        component: MechanicalComponent,
      },
      {
        path: 'EEE',
        component: EeeComponent,
      },
      {
        path: 'ECE',
        component: EceComponent,
      },
      {
        path: 'Civil',
        component: CivilComponent,
      },
      {
        path: 'Agriculture',
        component: AgricultureComponent,
      },
      {
        path: 'CSE',
        component: CseComponent,
      },
      {
        path: 'coming-soon',
        component: MoreServiceComponent,
      },
      {
        path: 'student',
        component: StudentSchemeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceProviderRoutingModule {}
