import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'service',
        loadChildren: () =>
          import('../service-provider/service-provider-routing.module').then((m) => m.ServiceProviderRoutingModule),
      }
    ]
  },

  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: HomeComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ServicefrontRoutingModule { }
