//import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header.component';




@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
