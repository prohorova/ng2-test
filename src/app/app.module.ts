import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientsModule } from './clients/clients.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
