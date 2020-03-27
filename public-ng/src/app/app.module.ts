import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestValuesComponent } from './components/latest-values/latest-values.component';
import { AboutLatestComponent } from './components/about-latest/about-latest.component';
import { ApiModalComponent } from './components/modals/api-modal/api-modal.component';
import { AboutModalComponent } from './components/modals/about-modal/about-modal.component';
import { ChartsLayoutComponent } from './components/charts/charts-layout/charts-layout.component';
import { AggregateChartComponent } from './components/charts/aggregate-chart/aggregate-chart.component';
import { ChangesChartComponent } from './components/charts/changes-chart/changes-chart.component';

import { PlotlyViaCDNModule } from 'angular-plotly.js';

PlotlyViaCDNModule.plotlyVersion = 'latest'; // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.plotlyBundle = 'basic'; // optional: can be null (for full) or 'basic', 'cartesian',
                                           // 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'

@NgModule({
  declarations: [
    AppComponent,
    LatestValuesComponent,
    AboutLatestComponent,
    ApiModalComponent,
    AboutModalComponent,
    ChartsLayoutComponent,
    AggregateChartComponent,
    ChangesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlotlyViaCDNModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
