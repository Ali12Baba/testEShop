import { ButtonsComponent } from './counter/buttons/buttons.component';
import { CounterComponent } from './counter/counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './state/counter.reducer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    OutputComponent,
    CounterComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  exports: [
    ButtonsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
