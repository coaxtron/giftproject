import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceWrapperComponent } from './components/service-wrapper/service-wrapper.component';
import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { MechanicalComponent } from './components/mechanical/mechanical.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormDetailsComponent } from './components/form-details/form-details.component';
import { ServiceListService } from './services/service-list.service';
import { ServicefrontModule } from '../servicefront/servicefront.module';
import { LazyImgDirective } from '../layzimg.directive';
import { ImageLazyLoadModule } from '../image-lazy-load/image-lazy-load.module';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { StudentSchemeComponent } from './components/student-scheme/student-scheme.component';
import { EeeComponent } from './components/eee/eee.component';
import { CivilComponent } from './components/civil/civil.component';
import { CseComponent } from './components/cse/cse.component';
import { AgricultureComponent } from './components/agriculture/agriculture.component';
import { EceComponent } from './components/ece/ece.component';
// import { HomeAppliancesComponent } from './components/farmers/farmers';

@NgModule({
  declarations: [
    ServiceWrapperComponent,
    MechanicalComponent,
    FormDetailsComponent,
    AppShellComponent,
    FarmerComponent,
    StudentSchemeComponent,
    EeeComponent,
    CivilComponent,
    CseComponent,
    AgricultureComponent,
    EceComponent,
    // LazyImgDirective
  ],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    MaterialModule,
    HttpClientModule,
    // LazyLoadImageModule
    ImageLazyLoadModule
  ],
  providers: [ServiceListService],
})
export class ServiceProviderModule { }
