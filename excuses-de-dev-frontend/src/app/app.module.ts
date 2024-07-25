import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddExcuseModalComponent } from './add-excuse-modal/add-excuse-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcuseButtonComponent } from './excuse-button/excuse-button.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExcuseModalComponent,
    ExcuseButtonComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
