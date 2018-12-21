import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WeatherV1Component} from './dashboard_ui/weather-v1/weather-v1.component';
import {NewsV1Component} from './dashboard_ui/news-v1/news-v1.component';
import {EventsV1Component} from './dashboard_ui/events-v1/events-v1.component';
import {HelperV1Component} from './dashboard_ui/helper-v1/helper-v1.component';
import {FruitsV1Component} from './dashboard_ui/crops/fruits-v1/fruits-v1.component';
import {FiberV1Component} from './dashboard_ui/crops/fiber-v1/fiber-v1.component';
import {GrainsV1Component} from './dashboard_ui/crops/grains-v1/grains-v1.component';
import {HurbalV1Component} from './dashboard_ui/crops/hurbal-v1/hurbal-v1.component';
import {NutsV1Component} from './dashboard_ui/crops/nuts-v1/nuts-v1.component';
import {OilV1Component} from './dashboard_ui/crops/oil-v1/oil-v1.component';
import {OrganicV1Component} from './dashboard_ui/crops/organic-v1/organic-v1.component';
import {OthersV1Component} from './dashboard_ui/crops/others-v1/others-v1.component';
import {PulsesV1Component} from './dashboard_ui/crops/pulses-v1/pulses-v1.component';
import {VegetablesV1Component} from './dashboard_ui/crops/vegetables-v1/vegetables-v1.component';
import {SpicesV1Component} from './dashboard_ui/crops/spices-v1/spices-v1.component';
import {StartupV1Component} from './dashboard_ui/crops/startup-v1/startup-v1.component';
import {WeatherV2Component} from './dashboard_ui/page/weather-v2/weather-v2.component';
import {CropSeedV1Component} from './dashboard_ui/page/crop-seed-v1/crop-seed-v1.component';
import {MapAreaV1Component} from './dashboard_ui/page/map-area-v1/map-area-v1.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: WeatherV1Component },
  { path: 'news', component: NewsV1Component },
  { path: 'events', component: EventsV1Component },
  { path: 'helper', component: HelperV1Component },
  { path: 'fruits', component: FruitsV1Component },
  { path: 'fiber', component: FiberV1Component },
  { path: 'grains', component: GrainsV1Component },
  { path: 'hurbal', component: HurbalV1Component },
  { path: 'nuts', component: NutsV1Component },
  { path: 'oil', component: OilV1Component },
  { path: 'organic', component: OrganicV1Component },
  { path: 'others', component: OthersV1Component },
  { path: 'pulses', component: PulsesV1Component },
  { path: 'spices', component: SpicesV1Component },
  { path: 'vegetables', component: VegetablesV1Component },
  { path: 'startdetails', component: StartupV1Component },
  { path: 'weather', component: WeatherV2Component },
  { path: 'cropseed', component: CropSeedV1Component },
  { path: 'map', component: MapAreaV1Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
