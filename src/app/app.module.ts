import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ServicefrontRoutingModule } from './servicefront/servicefront-routing.module';
import { ServicefrontModule } from './servicefront/servicefront.module';
import { ServiceProviderRoutingModule } from './service-provider/service-provider-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopService } from '../app/scrolltop.service';
import { LazyImgDirective } from '../app/layzimg.directive';
import { from } from 'rxjs';
import { ImageLazyLoadModule } from './image-lazy-load/image-lazy-load.module';
@NgModule({
  declarations: [
    AppComponent,
    // LazyImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageLazyLoadModule,
    // LazyImgDirective,
    MaterialModule,
    ServicefrontRoutingModule,
    ServicefrontModule,
    ServiceProviderRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ScrollTopService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
