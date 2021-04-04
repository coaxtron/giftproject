import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ServicefrontRoutingModule } from './servicefront-routing.module';
import { MaterialModule } from '../material/material.module';
import { BannerComponent } from './components/banner/banner.component';
import { HowItWorkComponent } from './components/how-it-work/how-it-work.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceProviderModule } from '../service-provider/service-provider.module';
import { TeamComponent } from './components/team/team.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UtilityService } from './services/utility.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MoreServiceComponent } from './components/more-service/more-service.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicefrontService } from './services/servicefront.service';
import { LazyImgDirective } from '../layzimg.directive';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ImageLazyLoadModule } from '../image-lazy-load/image-lazy-load.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    BannerComponent,
    HowItWorkComponent,
    OurServicesComponent,
    TeamComponent,
    AboutUsComponent,
    PortfolioComponent,
    MoreServiceComponent,
    BookingFormComponent,
    // LazyImgDirective
  ],
  imports: [
    CommonModule,
    ServicefrontRoutingModule,
    MaterialModule,
    ServiceProviderModule,
    HttpClientModule,
    // LazyLoadImageModule
    ImageLazyLoadModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    BookingFormComponent,
  ],
  providers: [UtilityService, ServicefrontService],
})
export class ServicefrontModule { }
