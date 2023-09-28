import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { New2Component } from './new2/new2.component';
import { AltaComponent } from './alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    New2Component,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
