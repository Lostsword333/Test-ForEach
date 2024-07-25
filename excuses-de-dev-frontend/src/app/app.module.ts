import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExcuseButtonComponent } from './excuse-button/excuse-button.component';
import { ExcusesService } from './excuses.service';

@NgModule({
  declarations: [
    AppComponent,
    // AddExcuseModalComponent,
    ExcuseButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExcusesService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
