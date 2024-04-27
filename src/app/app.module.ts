import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialComponent } from './components/material/material.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
