import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEnquiryComponent } from './addenquiry/addenquiry.component';


@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    AddEnquiryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
