import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './nav_ui/header-nav/header-nav.component';
import { WeatherV1Component } from './dashboard_ui/weather-v1/weather-v1.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { NewsV1Component } from './dashboard_ui/news-v1/news-v1.component';
import { EventsV1Component } from './dashboard_ui/events-v1/events-v1.component';
import { HelperV1Component } from './dashboard_ui/helper-v1/helper-v1.component';
import { FruitsV1Component } from './dashboard_ui/crops/fruits-v1/fruits-v1.component';
import { FiberV1Component } from './dashboard_ui/crops/fiber-v1/fiber-v1.component';
import { GrainsV1Component } from './dashboard_ui/crops/grains-v1/grains-v1.component';
import { HurbalV1Component } from './dashboard_ui/crops/hurbal-v1/hurbal-v1.component';
import { NutsV1Component } from './dashboard_ui/crops/nuts-v1/nuts-v1.component';
import { OilV1Component } from './dashboard_ui/crops/oil-v1/oil-v1.component';
import { OrganicV1Component } from './dashboard_ui/crops/organic-v1/organic-v1.component';
import { OthersV1Component } from './dashboard_ui/crops/others-v1/others-v1.component';
import { PulsesV1Component } from './dashboard_ui/crops/pulses-v1/pulses-v1.component';
import { SpicesV1Component } from './dashboard_ui/crops/spices-v1/spices-v1.component';
import { VegetablesV1Component } from './dashboard_ui/crops/vegetables-v1/vegetables-v1.component';
import { StartupV1Component } from './dashboard_ui/crops/startup-v1/startup-v1.component';
import { WeatherV2Component } from './dashboard_ui/page/weather-v2/weather-v2.component';
import { CropSeedV1Component } from './dashboard_ui/page/crop-seed-v1/crop-seed-v1.component';
import { MapAreaV1Component } from './dashboard_ui/page/map-area-v1/map-area-v1.component';
import { HeaderNav1Component } from './nav_ui/header-nav1/header-nav1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    WeatherV1Component,
    NewsV1Component,
    EventsV1Component,
    HelperV1Component,
    FruitsV1Component,
    FiberV1Component,
    GrainsV1Component,
    HurbalV1Component,
    NutsV1Component,
    OilV1Component,
    OrganicV1Component,
    OthersV1Component,
    PulsesV1Component,
    SpicesV1Component,
    VegetablesV1Component,
    StartupV1Component,
    WeatherV2Component,
    CropSeedV1Component,
    MapAreaV1Component,
    HeaderNav1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
