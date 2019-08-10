import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PracticeComponent } from './practice/practice.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdamComponent } from './adam/adam.component';


@NgModule({
  declarations: [
    AppComponent,

    PracticeComponent,
    AdamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
