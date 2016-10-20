import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortComponent } from './resorts/resorts.component';
import { ResortMenuComponent } from './resorts/resort-menu/resort-menu.component';
import { ResortImageComponent } from './resorts/resort-image/resort-image.component';
import { ResortListComponent } from './resorts/resort-list/resort-list.component';
import { ResortItemComponent } from './resorts/resort-item/resort-item.component';
import { ResortWeatherComponent } from './resorts/resort-weather/resort-weather.component';
import { ResortInfoComponent } from './resorts/resort-info/resort-info.component';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    ResortMenuComponent,
    ResortImageComponent,
    ResortListComponent,
    ResortItemComponent,
    ResortWeatherComponent,
    ResortInfoComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
